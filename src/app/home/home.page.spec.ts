import { ComponentFixture, TestBed } from '@angular/core/testing';  // Importing ComponentFixture and TestBed from '@angular/core/testing' module.
import { IonicModule } from '@ionic/angular';// Importing IonicModule from the '@ionic/angular' module.

import { HomePage } from './home.page';// Importing the HomePage component from the './home.page' file.

describe('HomePage', () => { // A test suite to group tests related to HomePage.
  let component: HomePage;  // Declaring a variable to hold an instance of HomePage component.
  let fixture: ComponentFixture<HomePage>; // Declaring a variable to hold the component fixture for HomePage.

  beforeEach(async () => { // A setup function that runs before each test.
    await TestBed.configureTestingModule({
      declarations: [HomePage], // Declaring HomePage component for the test.
      imports: [IonicModule.forRoot()] // Importing IonicModule for the test with necessary configuration.
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);  // Creating a component fixture for HomePage.
    component = fixture.componentInstance; // Assigning the component instance to the variable.
    fixture.detectChanges(); // Triggering change detection for the fixture.
  
  });

  it('should create', () => { // A test case to check if the component is created successfully.
    expect(component).toBeTruthy(); // Asserting that the component should exist (truthy).
  });
});
