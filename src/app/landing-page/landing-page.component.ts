import { Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [CommonModule],
})
export class LandingPageComponent implements AfterViewInit, OnInit {
  constructor(private router: Router) {}

  @ViewChild('section1') section1!: ElementRef;
  @ViewChild('section2') section2!: ElementRef;
  @ViewChild('section3') section3!: ElementRef;

  sections: { id: string; ref: HTMLElement; label: string }[] | null = null;

  currentSection: string = 'section1';
  isScrolling = false;

  ngOnInit() {
    history.scrollRestoration = 'manual'; // Empêche le navigateur de restaurer automatiquement la position
  }

  ngAfterViewInit() {
    this.sections = [
      { id: 'section1', ref: this.section1.nativeElement, label: 'Home' },
      { id: 'section2', ref: this.section2.nativeElement, label: 'See More' },
      { id: 'section3', ref: this.section3.nativeElement, label: 'About' },
    ];

    // Force absolument la première section en scrollant après un léger délai
    setTimeout(() => {
      this.section1.nativeElement.scrollIntoView({ behavior: 'auto' });
      this.setCurrentSection(this.section1.nativeElement);
    }, 50); // délai court nécessaire pour garantir le rendu complet
  }

  scrollToSection(section: HTMLElement) {
    if (this.isScrolling) return;

    this.isScrolling = true;
    section.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      this.setCurrentSection(section);
      this.isScrolling = false;
    }, 500);
  }

  onWheel(
    event: WheelEvent,
    previousSection: HTMLElement | null,
    nextSection: HTMLElement | null
  ) {
    if (this.isScrolling) return;

    this.isScrolling = true;

    if (event.deltaY > 0 && nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
      this.setCurrentSection(nextSection);
    } else if (event.deltaY < 0 && previousSection) {
      previousSection.scrollIntoView({ behavior: 'smooth' });
      this.setCurrentSection(previousSection);
    }

    setTimeout(() => {
      this.isScrolling = false;
    }, 500);
  }

  setCurrentSection(section: HTMLElement) {
    if (this.sections) {
      const foundSection = this.sections.find((s) => s.ref === section);
      if (foundSection) {
        this.currentSection = foundSection.id;
      }
    }
  }

  goToInsights(page: string) {
    this.router.navigate(['/playlistInsights', page]);
  }
}