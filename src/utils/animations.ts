import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateHero = () => {
  gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: 'power3.out',
  });
};

export const animateFeatures = (featuresRef: React.RefObject<HTMLElement>) => {
  gsap.from('.feature-card', {
    scrollTrigger: {
      trigger: featuresRef.current,
      start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    ease: 'back.out(1.7)',
  });
};

export const animatePortfolio = (portfolioRef: React.RefObject<HTMLElement>) => {
  gsap.from('.portfolio-item', {
    scrollTrigger: {
      trigger: portfolioRef.current,
      start: 'top 75%',
    },
    opacity: 0,
    scale: 0.9,
    stagger: 0.15,
    duration: 0.7,
    ease: 'power2.out',
  });
};

export const animateTeam = (teamRef: React.RefObject<HTMLElement>) => {
  gsap.from('.team-member', {
    scrollTrigger: {
      trigger: teamRef.current,
      start: 'top 75%',
    },
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power3.out',
  });
};

export const animateContact = (contactRef: React.RefObject<HTMLElement>) => {
  gsap.from('.contact-content', {
    scrollTrigger: {
      trigger: contactRef.current,
      start: 'top 80%',
    },
    opacity: 0,
    x: -30,
    duration: 0.8,
    ease: 'power2.out',
  });
  
  gsap.from('.contact-form', {
    scrollTrigger: {
      trigger: contactRef.current,
      start: 'top 80%',
    },
    opacity: 0,
    x: 30,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out',
  });
};

export const animateStats = (statsRef: React.RefObject<HTMLElement>) => {
  gsap.from('.stat-item', {
    scrollTrigger: {
      trigger: statsRef.current,
      start: 'top 80%',
    },
    opacity: 0,
    y: 20,
    stagger: 0.15,
    duration: 0.6,
    ease: 'power2.out',
  });
};