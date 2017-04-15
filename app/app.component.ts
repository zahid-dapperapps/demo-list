import { Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy, ViewContainerRef } from "@angular/core";
//import { Database } from '../shared/database';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import platformModule = require("platform");

import {EventData} from "data/observable";
import { Label } from "ui/label";
import application = require("application")
import StringFormat = require("nativescript-stringformat");
import { TouchGestureEventData } from "ui/gestures";
import { Page } from 'ui/page';


@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.css']
})

export class AppComponent implements OnInit{


  private whatis: boolean;
  private toggleRamFeed: boolean;
  private toggleIsolateEwe: boolean;
  private toggleTeaserPrep: boolean;
  private toggleJoinTeasers: boolean;
  private currentSelectedDetails: string;
  private platform: any;
  private active: number;


  constructor(private page: Page){
    this.platform = platformModule;


  }

  ngOnInit(){
    var that = this;
    this.platform = platformModule;

    this.whatis = false;
    this.toggleRamFeed = false;
    this.toggleIsolateEwe = false;
    this.toggleTeaserPrep = false;
    this.toggleJoinTeasers = false;
    this.currentSelectedDetails = "";


  }


  public toggleDetails(args: TouchGestureEventData, name){
        if(args.action == "down") {
            // this.clearToggle();
        } else if(args.action == "up") {
            if(this.currentSelectedDetails != name) {
                this[name] = !this[name];
                this.currentSelectedDetails = name;
            } else {
                this.currentSelectedDetails = "";
            }

        }
  }



}
