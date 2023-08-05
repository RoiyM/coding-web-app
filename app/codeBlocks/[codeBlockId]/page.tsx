"use client";
import CodeEditor from "@/components/codeEditor";
import { Button } from "@/components/ui/button";

export default function page({ params }: { params: { codeBlockId: string } }) {
  return (
    <>
      <div>
        <h1>Code Block {params.codeBlockId}</h1>
      </div>
      <CodeEditor />
      <Button className=" m-5">Submit</Button>
    </>
  );
}
