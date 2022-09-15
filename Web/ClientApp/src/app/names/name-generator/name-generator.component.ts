import {Component} from '@angular/core';
import {BackendService, GreekName, LastName} from "../../shared/services/backend.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-name-generator',
  templateUrl: './name-generator.component.html'
})
export class NameGeneratorComponent {
  nameParameters = new FormGroup({
    purpose: new FormControl('', Validators.required),
    gender: new FormControl('Male'),
    lastName: new FormControl('', Validators.required)
  });

  _lastNames!: LastName[];
  _names!: GreekName[];

  constructor(
    private backendService: BackendService
  ) {
    this.loadLastNames()
  }

  get lastNames() {
    return this._lastNames
  }

  get names() {
    return this._names
  }

  loadLastNames() {
    this.backendService.getLastNames().subscribe({
      next: value => {
        this._lastNames = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  loadGreekNames() {
    this.backendService.getNames().subscribe({
      next: value => {
        this._names = value;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  generateName() {
    if (this.nameParameters!.valid) {
      let generated = false;
      const chosenLastName: LastName = this.lastNames.filter(lastName => lastName.lastname === this.nameParameters.get("lastName")!.value)[0];
      this.backendService.getFirstNames().subscribe({
        next: names => {
          while (!generated) {
            const generatedName = names[Math.floor(Math.random() * names.length)]
            console.log(generatedName);
            const isNonBinary = this.nameParameters.get("gender")!.value === "Non-binary";
            const isSameGender = generatedName.gender === this.nameParameters.get("gender")!.value;
            if (isNonBinary || isSameGender) {
              const newName: GreekName = {
                name: generatedName.name,
                meaning: generatedName.meaning,
                gender: this.nameParameters.get("gender")!.value,
                purpose: this.nameParameters.get("purpose")!.value,
                lastname: this.nameParameters.get("lastName")!.value,
                lastmeaning: chosenLastName.meaning
              }
              console.log(newName);
              this.backendService.addName(newName).subscribe(() => {
                generated = true;
                this.backendService.toggleRecentlyGenerated();
              });
              generated = true;
            }
          }
        }
      })
    }
  }

}
