import { NgModule } from "@angular/core";
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const materials = [MatSliderModule, MatFormFieldModule, MatInputModule, MatButtonModule];

@NgModule({
    exports: [
        ...materials
    ]
})

export class MaterialModules {}