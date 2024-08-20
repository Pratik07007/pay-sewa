"use client";
import { RecoilRoot } from "recoil";

export default ({ children }: { children: React.ReactNode }): any => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
