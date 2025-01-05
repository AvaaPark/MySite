'use client'

import { useEffect } from 'react';

let mouseX = 50;
let mouseY = 50;

class Particle {
    constructor(size, x, y, speedX, speedY, letter, canvas, ctx) {
        this.size = size;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.letter = letter;

        this.canvas = canvas;
        this.ctx = ctx;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x + this.speedX > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y + this.speedY > this.canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }

        if (mouseX !== null && mouseY !== null) {
            const dist = Math.hypot(mouseX - this.x, mouseY - this.y);
            if (dist < 150) {
                const angle = Math.atan2(this.y - mouseY, this.x - mouseY);
                this.x += Math.cos(angle) * 2;
                this.y += Math.sin(angle) * 2;
                
                if (this.x < 0) this.x = 0;
                if (this.x + this.size > this.canvas.width) this.x = canvas.width - this.size;
                if (this.y < 0) this.y = 0;
                if (this.y + this.size > this.canvas.width) this.y = canvas.height - this.size;
            }
        }
    }

    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.fillText(this.letter, this.x, this.y);
        console.log(this);
    }
}

const animate = (canvas, ctx, particles) => {
    console.log(particles);
    const animationFrame = () => {
        console.log('animationFrame');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animationFrame);
    };

    animationFrame();
};

const initParticles = (canvas, ctx) => {
    const letters = ['A'];
    const particles = [];
    const numLetters = 100;
    const SPEED_MULTIPLIER = 0.5;
    // let mouseX = null;
    // let mouseY = null;
    
    canvas.addEventListener("mousemove", (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;
    })

    letters.forEach(letter => {
        particles.push(new Particle(letter, 40, 100, 0, 0, letter, canvas, ctx));
    });

    animate(canvas, ctx, particles);
}

export default function repelArt() {

    
    useEffect(() => {
        const canvas = document.getElementById('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        ctx.font = "48px serif";

        initParticles(canvas, ctx);
    }, []);

    return(
        <div>
            <canvas id="canvas"/>
        </div>
    )
};