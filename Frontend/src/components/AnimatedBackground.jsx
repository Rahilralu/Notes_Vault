import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: null, y: null });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const setSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = Array.from({ length: 120 }).map(() => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                color: `hsla(${Math.random() * 60 + 200}, 100%, 70%, `,
                alpha: Math.random() * 0.5 + 0.2,
                baseX: Math.random() * canvas.width,
                baseY: Math.random() * canvas.height,
            }));
        };

        const handleMouseMove = (event) => {
            mouseRef.current.x = event.x;
            mouseRef.current.y = event.y;
        };

        const handleMouseLeave = () => {
            mouseRef.current.x = null;
            mouseRef.current.y = null;
        }

        window.addEventListener('resize', setSize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        setSize();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#0f0c29');
            gradient.addColorStop(0.5, '#302b63');
            gradient.addColorStop(1, '#24243e');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                if (mouseRef.current.x != null) {
                    const dx = mouseRef.current.x - p.x;
                    const dy = mouseRef.current.y - p.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const maxDistance = 150;

                    if (distance < maxDistance) {
                        const force = (maxDistance - distance) / maxDistance;
                        const directionX = forceDirectionX * force * 0.5;
                        const directionY = forceDirectionY * force * 0.5;
                        p.vx += directionX;
                        p.vy += directionY;
                    }
                }

                p.vx *= 0.98;
                p.vy *= 0.98;
                if (Math.abs(p.vx) < 0.2) p.vx += (Math.random() - 0.5) * 0.1;
                if (Math.abs(p.vy) < 0.2) p.vy += (Math.random() - 0.5) * 0.1;


                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color + p.alpha + ')';
                ctx.fill();

            });

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
                if (mouseRef.current.x != null) {
                    const dx = particles[i].x - mouseRef.current.x;
                    const dy = particles[i].y - mouseRef.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 - dist / 1500})`;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
                        ctx.stroke();
                        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setSize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                overflow: 'hidden'
            }}
        />
    );
};

export default AnimatedBackground;
