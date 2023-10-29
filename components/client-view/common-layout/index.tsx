"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/client-view/navbar";
import {ReactNode} from "react";

interface CommonLayoutProps {
  children: ReactNode,
}
export default function CommonLayout({ children }: CommonLayoutProps) {
  const pathName = usePathname();
  return (
    <>
      {pathName !== "/admin" ? <Navbar /> : null}
      {children}
    </>
  );
}
