/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RightSidebar = () => {
  const router = useRouter();

  return <section className="right_sidebar">RightSidebar</section>;
};

export default RightSidebar;
