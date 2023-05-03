import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { amosScrollbarModule } from '@amos/directives/scrollbar/public-api';
import { amosHorizontalNavigationBasicItemComponent } from '@amos/components/navigation/horizontal/components/basic/basic.component';
import { amosHorizontalNavigationBranchItemComponent } from '@amos/components/navigation/horizontal/components/branch/branch.component';
import { amosHorizontalNavigationDividerItemComponent } from '@amos/components/navigation/horizontal/components/divider/divider.component';
import { amosHorizontalNavigationSpacerItemComponent } from '@amos/components/navigation/horizontal/components/spacer/spacer.component';
import { amosHorizontalNavigationComponent } from '@amos/components/navigation/horizontal/horizontal.component';
import { amosVerticalNavigationAsideItemComponent } from '@amos/components/navigation/vertical/components/aside/aside.component';
import { amosVerticalNavigationBasicItemComponent } from '@amos/components/navigation/vertical/components/basic/basic.component';
import { amosVerticalNavigationCollapsableItemComponent } from '@amos/components/navigation/vertical/components/collapsable/collapsable.component';
import { amosVerticalNavigationDividerItemComponent } from '@amos/components/navigation/vertical/components/divider/divider.component';
import { amosVerticalNavigationGroupItemComponent } from '@amos/components/navigation/vertical/components/group/group.component';
import { amosVerticalNavigationSpacerItemComponent } from '@amos/components/navigation/vertical/components/spacer/spacer.component';
import { amosVerticalNavigationComponent } from '@amos/components/navigation/vertical/vertical.component';

@NgModule({
    declarations: [
        amosHorizontalNavigationBasicItemComponent,
        amosHorizontalNavigationBranchItemComponent,
        amosHorizontalNavigationDividerItemComponent,
        amosHorizontalNavigationSpacerItemComponent,
        amosHorizontalNavigationComponent,
        amosVerticalNavigationAsideItemComponent,
        amosVerticalNavigationBasicItemComponent,
        amosVerticalNavigationCollapsableItemComponent,
        amosVerticalNavigationDividerItemComponent,
        amosVerticalNavigationGroupItemComponent,
        amosVerticalNavigationSpacerItemComponent,
        amosVerticalNavigationComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        amosScrollbarModule,
    ],
    exports: [
        amosHorizontalNavigationComponent,
        amosVerticalNavigationComponent,
    ],
})
export class amosNavigationModule {}
