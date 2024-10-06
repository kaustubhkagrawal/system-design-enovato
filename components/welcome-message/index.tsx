"use client";

import { cn } from "@/lib/utils/clsx";
import { Button, Flex, Type } from "@/ui";
import { Dialog, DialogContent } from "@/ui/dialog";

import {
  ArrowRight,
  Lock,
  LucideIcon,
  MessageCircle,
  Rocket,
  ToyBrick,
  WandSparkles,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { AiModelsCopy } from "./ai-models-copy";
import { CustomAssistantCopy } from "./custom-assistant-copy";
import { OpenSourceCopy } from "./opensource-copy";
import { PluginCopy } from "./plugin-copy";
import { PrivacyCopy } from "./privacy-copy";

export type TWelcomeMessageProps = {
  show: boolean;
};

export type WelcomePoint = {
  icon: LucideIcon;
  text: React.ReactNode;
};

const welcomePoints: WelcomePoint[] = [];

export const WelcomeMessage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const wasShown = localStorage?.getItem("welcomeMessageShown");
      if (wasShown !== "true") {
        const timer = setTimeout(() => {
          setOpen(true);
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    if (typeof window !== "undefined") {
      localStorage?.setItem("welcomeMessageShown", "true");
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        localStorage.setItem("welcomeMessageShown", "true");
      }}
    >
      <DialogContent
        ariaTitle="Welcome Message"
        className="max-w-80vw rounded-xl md:max-w-[660px]"
      >
        <div className="flex w-full flex-row items-start justify-start gap-2">
          <div className="flex w-full scale-95 flex-col items-start md:scale-100 md:flex-row">
            <Flex
              direction="col"
              gap="lg"
              items="start"
              className="w-full flex-1 overflow-hidden p-0 md:p-4"
            >
              <Type size="lg" className="pb-2">
                Welcome to Enovato!
              </Type>
              <Flex direction="col" gap="xl" items="start">
                <Type size="sm" textColor="secondary" className="flex gap-3">
                  <Rocket
                    size={20}
                    strokeWidth={1.5}
                    className="mt-1 flex-shrink-0"
                  />
                  <p className="inline-block leading-7 md:leading-6">
                    Enovato is your AI-powered micro-learning platform.
                  </p>
                </Type>
                <Type size="sm" textColor="secondary" className="flex gap-3">
                  <MessageCircle
                    size={20}
                    strokeWidth={1.5}
                    className="mt-1 flex-shrink-0"
                  />
                  <p className="inline-block leading-7 md:leading-6">
                    Engage in interactive lessons on any topic, guided by our intelligent AI tutor.
                  </p>
                </Type>
                <Type size="sm" textColor="secondary" className="flex gap-3">
                  <ToyBrick
                    size={20}
                    strokeWidth={1.5}
                    className="mt-1 flex-shrink-0"
                  />
                  <p className="inline-block leading-7 md:leading-6">
                    Learn effectively with the Socratic method, where AI asks insightful questions to deepen your understanding.
                  </p>
                </Type>
              </Flex>
              <Type size="sm" textColor="secondary" className="pt-2">
                Ready to start learning?
              </Type>
              <Flex gap="md">
                <Button size="md" variant="default" onClick={handleClose}>
                  Let&apos;s Go! <ArrowRight size={16} />
                </Button>
              </Flex>
            </Flex>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
