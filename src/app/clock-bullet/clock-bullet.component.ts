import { Component } from '@angular/core';

@Component({
  selector: 'app-clock-bullet',
  templateUrl: './clock-bullet.component.html',
  styleUrls: ['./clock-bullet.component.css']
})
export class ClockBulletComponent {
  currentDate: Date = new Date();
  currentDateBullet: Date = new Date();

  totalMonths: number = 0;
  bulletDegrees: number = 0;

  moveBullet(forward: boolean) {
    const direction = forward ? 1 : -1;
    const newDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + direction, this.currentDate.getDate());

    this.currentDate = newDate;
    
    const currentSeconds = this.currentDateBullet.getSeconds();
    const newSeconds = (currentSeconds + direction + 60) % 60; // Ensure within 0-59 range
    const secondsDiff = newSeconds - currentSeconds;
  
    const updatedDate = new Date(this.currentDateBullet);
    updatedDate.setSeconds(updatedDate.getSeconds() + secondsDiff);
  
    this.currentDateBullet = updatedDate;

    this.calculateTotalMonths();
    this.updateBulletPosition();

   
    
  }

  calculateTotalMonths() {
    // Logic to calculate total months from a base date to currentDate
    // For example:
    const baseDate = new Date(2023, 0, 1); // Assuming a base date of January 1, 2023
    const diff = this.currentDate.getMonth() - baseDate.getMonth() +
      (12 * (this.currentDate.getFullYear() - baseDate.getFullYear()));

    this.totalMonths = diff;
  }
  getBulletTransform(): string {
    return `rotate(${this.bulletDegrees}deg) translate(80px)`;
    // Adjust '80px' based on the clock's radius
  }
  updateBulletPosition() {
    const seconds = this.currentDateBullet.getSeconds();
    this.bulletDegrees = seconds * 6;
  }
}
