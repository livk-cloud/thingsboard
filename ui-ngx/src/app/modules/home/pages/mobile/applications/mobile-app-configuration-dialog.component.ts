///
/// Copyright © 2016-2024 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { Component, Inject } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface MobileAppConfigurationDialogData {
  afterAdd: boolean;
}

@Component({
  selector: 'tb-mobile-app-configuration-dialog',
  templateUrl: './mobile-app-configuration-dialog.component.html',
  styleUrls: ['./mobile-app-configuration-dialog.component.scss']
})
export class MobileAppConfigurationDialogComponent extends DialogComponent<MobileAppConfigurationDialogComponent> {

  notShowAgain = false;

  showDontShowAgain: boolean;

  constructor(protected store: Store<AppState>,
              protected router: Router,
              @Inject(MAT_DIALOG_DATA) private data: MobileAppConfigurationDialogData,
              protected dialogRef: MatDialogRef<MobileAppConfigurationDialogComponent>,
              ) {
    super(store, router, dialogRef);

    this.showDontShowAgain = this.data.afterAdd;

  }

  close(): void {
    if (this.notShowAgain && this.showDontShowAgain) {
      // this.store.dispatch(new ActionPreferencesPutUserSettings({ notDisplayConnectivityAfterAddDevice: true }));
      this.dialogRef.close(null);
    } else {
      this.dialogRef.close(null);
    }
  }
}
