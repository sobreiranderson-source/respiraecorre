import { useEffect } from 'react';

/**
 * Hook para aplicar animações ao scroll
 * Observa elementos com classe 'animate-on-scroll' e adiciona classe 'visible' quando entram no viewport
 */
export const useScrollAnimations = () => {
    useEffect(() => {
        // Respeitar preferências de movimento reduzido
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            // Se o usuário prefere movimento reduzido, adicionar classe visible a todos os elementos imediatamente
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(el => el.classList.add('visible'));
            return;
        }

        // Configurar Intersection Observer para animações
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Opcional: parar de observar após animar (economia de recursos)
                        // observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Elemento precisa estar 10% visível
                rootMargin: '0px 0px -50px 0px' // Começar animação um pouco antes
            }
        );

        // Observar todos os elementos com classe animate-on-scroll
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        // Cleanup
        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);
};
