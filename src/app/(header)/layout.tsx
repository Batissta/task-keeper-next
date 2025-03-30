import Header from "@/components/global/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taskeeper - Seu administrador de tarefas",
  description: "Seu administrador de tarefas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
