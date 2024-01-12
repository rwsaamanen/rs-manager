"use client";

import React, { useCallback } from 'react';

import {
  ChevronsLeft,
  MenuIcon,
  ListTodo,
  File,
  Home,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useLocalStorage } from "usehooks-ts";
import { cn } from "@/lib/utils";

import { UserItem } from "./user-item";
import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import NavItem from "./nav-item";

interface SidebarProps {
  storageKey?: string;
};

export const Sidebar = ({ storageKey = "t-sidebar-state",
}: SidebarProps) => {

  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );

  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  const resetWidth = useCallback(() => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);
  
      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty(
        "left",
        isMobile ? "100%" : "240px"
      );
      setTimeout(() => setIsResetting(false), 300);
    }
  }, [isMobile, sidebarRef, navbarRef, setIsCollapsed, setIsResetting]);
  
  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile, resetWidth]);
  
  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [pathname, isMobile, resetWidth]);

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");
      setTimeout(() => setIsResetting(false), 300);
    }
  }

  const defaultAccordionValue: string[] = Object.keys(expanded)
    .reduce((acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }

      return acc;
    }, []);

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar flex flex-col h-full w-60 overflow-y-auto relative bg-secondary",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div
          onClick={collapse}
          role="button"
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>
        <div className="flex-grow">
          <Link href="/dashboard">
            <h1 className="text-center mt-4 font-semibold text-xl cursor-pointer">Swiftyfi</h1>
          </Link>
          <div className="flex flex-col items-start space-y-4 px-10 mt-10 text-sm">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <p className="hover:underline">Home</p>
            </Link>
            <Link href="/todo" className="flex items-center space-x-2">
              <ListTodo className="h-4 w-4" />
              <p className="hover:underline">TODO List</p>
            </Link>
            <Link href="/notes" className="flex items-center space-x-2">
              <File className="h-4 w-4" />
              <p className="hover:underline">Notes</p>
            </Link>
          </div>
        </div>
        <UserItem />
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full"
        )}
      >
        <nav className="bg-transparent px-2 py-2 w-full">
          {isCollapsed && <MenuIcon onClick={resetWidth} role="button" className="h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 transition" />}
        </nav>
      </div>

    </>
  )
}