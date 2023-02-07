import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogInternalComponent } from './blog-internal.component';

describe('BlogInternalComponent', () => {
  let component: BlogInternalComponent;
  let fixture: ComponentFixture<BlogInternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogInternalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
