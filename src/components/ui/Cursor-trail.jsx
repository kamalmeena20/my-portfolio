"use client";

import { useEffect } from "react";

const StarryCursor = () => {
    useEffect(() => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        document.body.appendChild(canvas);
        canvas.style.position = "fixed";
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = "9999";

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];

        class MagicParticle {
            constructor(x, y) {
                this.x = x + (Math.random() - 0.5) * 80; // 👈 Spread out stars
                this.y = y + (Math.random() - 0.5) * 80;
                this.size = Math.random() * 6 + 4; // smaller stars
                this.opacity = 1;
                this.speedX = (Math.random() - 0.5) * 1.5;
                this.speedY = (Math.random() - 0.5) * 1.5;
                const colors = [
                    "#00fff0", "#009E66", "#068ec7", "#009E66",
                    "#f91717", "#009E66", "#11f639", "#009E66", "#46aff3"
                ];
                this.baseColor = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.opacity -= 0.015;
            }

            drawStar(cx, cy, spikes, outerRadius, innerRadius) {
                let rot = (Math.PI / 2) * 3;
                let x = cx;
                let y = cy;
                const step = Math.PI / spikes;

                ctx.beginPath();
                ctx.moveTo(cx, cy - outerRadius);
                for (let i = 0; i < spikes; i++) {
                    x = cx + Math.cos(rot) * outerRadius;
                    y = cy + Math.sin(rot) * outerRadius;
                    ctx.lineTo(x, y);
                    rot += step;

                    x = cx + Math.cos(rot) * innerRadius;
                    y = cy + Math.sin(rot) * innerRadius;
                    ctx.lineTo(x, y);
                    rot += step;
                }
                ctx.lineTo(cx, cy - outerRadius);
                ctx.closePath();
            }

            draw() {
                ctx.save();
                this.drawStar(this.x, this.y, 5, this.size, this.size / 2); // 👈 star shape
                ctx.fillStyle = this.baseColor;
                ctx.globalAlpha = Math.max(this.opacity, 0);
                ctx.fill();
                ctx.restore();
                ctx.globalAlpha = 1;
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p, i) => {
                p.update();
                p.draw();
                if (p.opacity <= 0) particles.splice(i, 1);
            });
            requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            for (let i = 0; i < 2; i++) {
                particles.push(new MagicParticle(e.clientX, e.clientY));
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeChild(canvas);
        };
    }, []);

    return null;
};

export default StarryCursor;


