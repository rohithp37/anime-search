import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from "./components/search/search.component";
import { MaterialModules } from "./material.module";
import { HttpClientModule } from '@angular/common/http';
import { SearchDataComponent } from "./components/search-data/search-data.component";
import { AnimeCardComponent } from "./components/anime-card/anime-card.component";

const components = [SearchComponent, SearchDataComponent, AnimeCardComponent]

@NgModule({
    imports: [
        CommonModule,
        MaterialModules,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
        ...components
    ],
    exports: [...components]
})

export class SharedComponentModule {}