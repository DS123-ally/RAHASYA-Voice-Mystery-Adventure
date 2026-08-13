"use client";

import { useCallback, useRef, useState, type RefObject } from "react";
import { X } from "lucide-react";
import type { District } from "@/lib/game/districts";
import type { NpcTurn } from "@/lib/game/npc-memory";
import type { LessonTarget } from "@/lib/game/tasks";
import { useVoice } from "@/lib/useVoice";
import { playSfx } from "@/lib/audio/sfx";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { gloss, ui } from "@/lib/i18n/gloss";
import type { BaseLangCode } from "@/lib/i18n/base-lang";
import { cn } from "@/lib/utils";
import type { TtsPrefetchMap } from "@/lib/tts/prefetch-client";

type Phase = "npc" | "player" | "loading";

export default function FreeChat({
  district,
  baseLang,
  target,
  priorMemory,
  onMemoryUpdate,
  onClose,
  onComplete,
  onPoints,
  ttsPrefetchRef,
}: {
  district: District;
  baseLang: BaseLangCode;
  target: LessonTarget;
  priorMemory: NpcTurn[];
  onMemoryUpdate: (turns: NpcTurn[]) => void;
  onClose: () => void;
  onComplete: (id: string, reward: number) => void;
  onPoints: (points: number) => void;
  ttsPrefetchRef?: RefObject<TtsPrefetchMap>;
}) {
  const hasPrior = priorMemory.length > 0;
  
  const [phase, setPhase] = useState<Phase>("player");
  const [lastNpcLine, setLastNpcLine] = useState<string>(
    hasPrior ? priorMemory[priorMemory.length - 1]?.content : "Hello! (Speak to me!)"
  );
  const [lastPlayerLine, setLastPlayerLine] = useState<string>("");
  const [npcSpeaking, setNpcSpeaking] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const voice = useVoice(district.language);
  const sessionTurnsRef = useRef<NpcTurn[]>(priorMemory);
  
  const pushTurn = useCallback((turn: NpcTurn) => {
    const text = turn.content.trim();
    if (!text) return;
    sessionTurnsRef.current = [...sessionTurnsRef.current, { ...turn, content: text }];
  }, []);

  const playAudio = useCallback(
    async (text: string, onDone?: () => void) => {
      try {
        const res = await fetch("/api/speak", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ districtId: district.id, npcId: target.id, text }),
        });
        const { audio } = await res.json();
        if (!audio) {
          onDone?.();
          return;
        }
        audioRef.current?.pause();
        const a = new Audio(audio);
        audioRef.current = a;
        a.onended = () => onDone?.();
        a.onerror = () => onDone?.();
        await a.play().catch(() => onDone?.());
      } catch {
        onDone?.();
      }
    },
    [district.id, target.id]
  );

  async function onMicUp() {
    if (!voice.recording) return;
    playSfx("tap");
    const transcript = await voice.stop();

    if (!transcript) {
      playSfx("error");
      return;
    }
    
    setLastPlayerLine(transcript);
    pushTurn({ role: "user", content: transcript });
    setPhase("loading");
    
    try {
      const res = await fetch("/api/talk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          districtId: district.id,
          npcId: target.id,
          playerText: transcript,
          history: sessionTurnsRef.current.slice(0, -1),
          clues: []
        }),
      });
      
      const { reply, missionComplete, reward } = await res.json();
      
      if (reply) {
        setLastNpcLine(reply);
        pushTurn({ role: "assistant", content: reply });
        
        setPhase("npc");
        setNpcSpeaking(true);
        await playAudio(reply, () => {
          setNpcSpeaking(false);
          setPhase("player");
        });
        
        if (missionComplete && reward > 0) {
          onPoints(reward);
          onComplete(target.id, reward);
        }
      } else {
        setPhase("player");
      }
    } catch {
      setPhase("player");
    }
  }

  const roleGloss = gloss(target.role, baseLang);
  const objectiveBrief = gloss(target.brief, baseLang);

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showClose={false}
        className="fixed top-auto bottom-6 max-h-[min(85vh,42rem)] translate-y-0 gap-0 overflow-y-auto p-0 sm:max-w-2xl"
      >
        <DialogHeader className="flex-row items-center gap-3 space-y-0 border-b-2 border-border px-4 py-3 text-left">
          <div
            className="size-9 shrink-0 rounded-base border-2 border-border"
            style={{ background: `#${target.colour.toString(16).padStart(6, "0")}` }}
          />
          <div className="min-w-0 flex-1">
            <DialogTitle className="text-lg">{target.name}</DialogTitle>
            <DialogDescription>
              {roleGloss} · {ui("learning", baseLang)}{" "}
              <strong className="font-indic text-foreground">{district.native}</strong>
            </DialogDescription>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <DialogClose className="rounded-base opacity-100 ring-offset-white focus:outline-hidden focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
              <X />
              <span className="sr-only">{ui("close", baseLang)}</span>
            </DialogClose>
          </div>
        </DialogHeader>

        <Alert className="rounded-none border-x-0 border-t-0 shadow-none">
          <AlertTitle className="text-xs uppercase tracking-widest">
            {ui("objective", baseLang)}
          </AlertTitle>
          <AlertDescription>{objectiveBrief}</AlertDescription>
        </Alert>

        <div className="grid gap-3 p-4 sm:grid-cols-2">
          <Card className="gap-2 py-4">
            <CardHeader className="px-4 pb-0">
              <CardTitle className="text-[0.625rem] uppercase tracking-widest text-foreground/70">
                {target.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 px-4">
              <p className="font-indic text-lg leading-snug" lang={district.language.slice(0, 2)}>
                {lastNpcLine}
              </p>
              {npcSpeaking && (
                <span className="text-xs text-main animate-pulse">{ui("speaking", baseLang)}</span>
              )}
            </CardContent>
          </Card>

          <Card className="gap-2 py-4 text-right sm:text-right">
            <CardHeader className="px-4 pb-0">
              <CardTitle className="text-[0.625rem] uppercase tracking-widest text-foreground/70">
                {ui("you", baseLang)}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 px-4 max-sm:text-left">
              <p className="text-base text-foreground/80">
                {lastPlayerLine || "..."}
              </p>
            </CardContent>
          </Card>
        </div>

        {phase === "loading" && (
          <div className="flex items-center justify-center border-t-2 border-border px-4 py-4">
             <span className="animate-pulse">Thinking...</span>
          </div>
        )}

        {(phase === "player" || phase === "npc") && (
          <div className="flex flex-col items-center gap-2 border-t-2 border-border px-4 py-4">
            <Button
              type="button"
              size="icon"
              className={cn(
                "size-16 text-2xl touch-none select-none",
                voice.recording && "bg-chart-2 hover:bg-chart-2",
              )}
              onMouseDown={() => {
                playSfx("tap");
                voice.start();
              }}
              onMouseUp={onMicUp}
              onMouseLeave={onMicUp}
              onTouchStart={(e) => {
                e.preventDefault();
                playSfx("tap");
                voice.start();
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                void onMicUp();
              }}
              disabled={voice.transcribing || phase === "npc"}
              aria-label={ui("holdToSpeak", baseLang)}
            >
              {voice.transcribing ? "···" : voice.recording ? "◉" : "🎙"}
            </Button>
            <p className="text-xs text-foreground/70">
              {voice.transcribing ? (
                ui("transcribing", baseLang)
              ) : voice.recording ? (
                voice.partial ? (
                  <span className="italic">
                    {voice.partial}
                    <span className="animate-pulse">▍</span>
                  </span>
                ) : (
                  ui("listening", baseLang)
                )
              ) : (
                ui("holdToSpeakLine", baseLang)
              )}
            </p>
          </div>
        )}

      </DialogContent>
    </Dialog>
  );
}
