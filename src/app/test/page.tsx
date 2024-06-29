"use client";

import { ChangeEvent, MouseEvent, useRef, useState } from "react";

type Props = {};

function Page({}: Props) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [isDrawing, setIsDrawing] = useState(false);

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const img = new Image();
				img.onload = () => {
					const canvas = canvasRef.current;
					if (canvas) {
						const ctx = canvas.getContext("2d");
						if (ctx) {
							ctx.clearRect(0, 0, canvas.width, canvas.height);
							ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
						}
					}
				};
				if (e.target) {
					img.src = e.target.result as string;
				}
			};
			reader.readAsDataURL(file);
		}
	};

	const startDrawing = (event: MouseEvent<HTMLCanvasElement>) => {
		setIsDrawing(true);
		draw(event);
	};

	const endDrawing = () => {
		setIsDrawing(false);
	};

	const draw = (event: MouseEvent<HTMLCanvasElement>) => {
		const canvas = canvasRef.current;
		if (isDrawing && canvas) {
			const ctx = canvas.getContext("2d");
			if (ctx) {
				ctx.fillStyle = "red";
				ctx.fillRect(
					event.nativeEvent.offsetX,
					event.nativeEvent.offsetY,
					5,
					5,
				);
			}
		}
	};

	return (
		<div className="pt-32 mx-auto">
			<input
				className="text-foreground"
				type="file"
				accept="image/*"
				onChange={handleFileChange}
			/>
			<canvas
				className="bg-white rounded-lg shadow-lg"
				ref={canvasRef}
				width={800}
				height={600}
				onMouseDown={startDrawing}
				onMouseUp={endDrawing}
				onMouseLeave={endDrawing} // To handle the case when the mouse leaves the canvas while drawing
				onMouseMove={draw}
				style={{ border: "1px solid black" }}
			/>
		</div>
	);
}

export default Page;
