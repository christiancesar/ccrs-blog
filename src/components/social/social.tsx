"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { AtSignIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { Linkedin } from "@/assets/icons/linkedin";
import { Button } from "@/components/ui/button";

export function Social() {
	const [copiedEmail, setCopiedEmail] = useState(false);

	const handleCopyEmail = () => {
		navigator.clipboard.writeText("christian.cesa@ccrs.dev");
		setCopiedEmail(true);
		setTimeout(() => setCopiedEmail(false), 2000);
		toast.success("Email copiado para a área de transferência!");
	};
	return (
		<div className="flex flex-row gap-1">
			<Button variant="secondary" onClick={handleCopyEmail}>
				{copiedEmail ? <CheckIcon className="text-primary" /> : <AtSignIcon />}
				christian.cesar@ccrs.dev
			</Button>
			<Link href="https://www.linkedin.com/in/christian-cesar" target="_blank">
				<Button variant="secondary" size="icon">
					<Linkedin />
				</Button>
			</Link>
			<Link href="https://github.com/christiancesar" target="_blank">
				<Button variant="secondary" size="icon">
					<SiGithub />
				</Button>
			</Link>
		</div>
	);
}
