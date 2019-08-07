import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { ListMyComponent } from "./list-my.component";

describe("ListMyComponent", () => {
  let component: ListMyComponent;
  let fixture: ComponentFixture<ListMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListMyComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
