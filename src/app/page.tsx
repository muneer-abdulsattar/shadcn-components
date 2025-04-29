"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyBlock, dracula } from "react-code-blocks";
import { toast } from "sonner";

export default function Page() {
	return (
		<ScrollArea className="mx-auto border-x-2 border-dashed h-screen container">
			<div className="p-12">
				<div>
					<div className="flex justify-between">
						<h2 className="mb-2 font-bold text-xl md:text-3xl">Title Here</h2>
						<div>copy</div>
					</div>
					<Tabs defaultValue="component" className="w-full">
						<TabsList>
							<TabsTrigger value="component">Component</TabsTrigger>
							<TabsTrigger value="code">Code</TabsTrigger>
						</TabsList>
						<TabsContent value="component">
							<div>hello world</div>
						</TabsContent>
						<TabsContent value="code">
							<CopyBlock
								text={"export default function Page() {}"}
								language={"tsx"}
								showLineNumbers
								theme={dracula}
								onCopy={() => {
									toast.success("Code copied to clipboard");
								}}
							/>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</ScrollArea>
	);
}
