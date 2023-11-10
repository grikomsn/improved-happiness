import { Metadata } from "next";
import Component from "./component";

export const metadata = {
  title: "Keystatic Admin",
  description: "Dashboard interface for author and manage this website",
} satisfies Metadata;

export default function Layout() {
  return <Component />;
}
