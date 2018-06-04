import {async, inject, TestBed} from '@angular/core/testing';
import {AppComponent, AppComponentFormGroup} from './app.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {AddressComponent} from './address/address.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AddressComponent
      ],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('creates a form group', inject([FormBuilder], (_fb: FormBuilder) => {
    const appComponentFormGroup = new AppComponentFormGroup(_fb);
    expect(appComponentFormGroup.controls['name']).toBeTruthy();
  }));

  it('validates a form group', inject([FormBuilder], (_fb: FormBuilder) => {
    const appComponentFormGroup = new AppComponentFormGroup(_fb);

    appComponentFormGroup.controls['name'].setValue('Hello name');
    expect(appComponentFormGroup.controls['name'].valid).toBeTruthy();
    expect(appComponentFormGroup.valid).toBeFalsy();
  }));
});
