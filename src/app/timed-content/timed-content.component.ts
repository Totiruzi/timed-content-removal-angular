import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../services/content.service';

import { Content } from '../models/content.model';
import { catchError, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-timed-content',
  imports: [CommonModule], // Import CommonModule for common directives
  templateUrl: './timed-content.component.html',
  styleUrl: './timed-content.component.scss'
})
export class TimedContentComponent implements OnInit, AfterViewInit, OnDestroy {
  contents: Content[] = []; // Array to store fetched content items
  private subscription!: Subscription; // Subscription object for observables

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.fetchContents(); // Initialize component by fetching contents
  }

  ngAfterViewInit(): void {
    this.scheduleRemovalForAllContents(); // Schedule removal of expired contents after view initialized
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe(); // Unsubscribe from the subscription when component is destroyed
    }

  }

  private fetchContents(): void {
    this.subscription = this.contentService.fetchContents().pipe(
      tap(data => {
        this.contents = data; // Update contents array with fetched data
      }),
      catchError(error => {
        console.error('Error fetching contents:', error);
        // This error might be handle differently based on the needs
        throw error; // Re-throw the error for further handling
      })
    ).subscribe(); // Subscribe to the observable
  }

  scheduleRemovalForAllContents(): void {
    setInterval(() => {
      const now = new Date().getTime(); // Get current timestamp
      this.contents.forEach(content => {
        const expirationTime  = new Date(content.expirationDate).getTime()
        if (expirationTime <= now) {
          this.removeContent(Number(content.id)); // Remove expired content
        }
      });
    }, 60000); // Check every minute
  }

  removeContent(contentId: number): void {
    this.contents = this.contents.filter((content) => content.id !== contentId.toString());
  }

  getContentType(value: string): string {
    if (value.startsWith('data:image')) {
      return 'image'; // Return 'image' if value starts with image data URL prefix
    } else {
      return 'text'; // Otherwise, return 'text'
    }
  }
}
