"use strict";
var core_1 = require("@angular/core");
var platformModule = require("platform");
var page_1 = require("ui/page");
var AppComponent = (function () {
    function AppComponent(page) {
        this.page = page;
        this.platform = platformModule;
    }
    AppComponent.prototype.ngOnInit = function () {
        var that = this;
        this.platform = platformModule;
        this.whatis = false;
        this.toggleRamFeed = false;
        this.toggleIsolateEwe = false;
        this.toggleTeaserPrep = false;
        this.toggleJoinTeasers = false;
        this.currentSelectedDetails = "";
    };
    AppComponent.prototype.toggleDetails = function (args, name) {
        if (args.action == "down") {
        }
        else if (args.action == "up") {
            if (this.currentSelectedDetails != name) {
                this[name] = !this[name];
                this.currentSelectedDetails = name;
            }
            else {
                this.currentSelectedDetails = "";
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'app.component.html',
        styleUrls: ['app.css']
    }),
    __metadata("design:paramtypes", [page_1.Page])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFvSDtBQUlwSCx5Q0FBNEM7QUFPNUMsZ0NBQStCO0FBUy9CLElBQWEsWUFBWTtJQWF2QixzQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7SUFHakMsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7UUFFL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztJQUduQyxDQUFDO0lBR00sb0NBQWEsR0FBcEIsVUFBcUIsSUFBMkIsRUFBRSxJQUFJO1FBQ2hELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztRQUUzQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1lBQ3ZDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsc0JBQXNCLEdBQUcsRUFBRSxDQUFDO1lBQ3JDLENBQUM7UUFFTCxDQUFDO0lBQ1AsQ0FBQztJQUlILG1CQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQztBQWxEWSxZQUFZO0lBTnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsS0FBSztRQUNmLFdBQVcsRUFBRSxvQkFBb0I7UUFDakMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO0tBQ3ZCLENBQUM7cUNBZTBCLFdBQUk7R0FibkIsWUFBWSxDQWtEeEI7QUFsRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vL2ltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSAnLi4vc2hhcmVkL2RhdGFiYXNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgcGxhdGZvcm1Nb2R1bGUgPSByZXF1aXJlKFwicGxhdGZvcm1cIik7XG5cbmltcG9ydCB7RXZlbnREYXRhfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuaW1wb3J0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcImFwcGxpY2F0aW9uXCIpXG5pbXBvcnQgU3RyaW5nRm9ybWF0ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zdHJpbmdmb3JtYXRcIik7XG5pbXBvcnQgeyBUb3VjaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhcHAuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cblxuICBwcml2YXRlIHdoYXRpczogYm9vbGVhbjtcbiAgcHJpdmF0ZSB0b2dnbGVSYW1GZWVkOiBib29sZWFuO1xuICBwcml2YXRlIHRvZ2dsZUlzb2xhdGVFd2U6IGJvb2xlYW47XG4gIHByaXZhdGUgdG9nZ2xlVGVhc2VyUHJlcDogYm9vbGVhbjtcbiAgcHJpdmF0ZSB0b2dnbGVKb2luVGVhc2VyczogYm9vbGVhbjtcbiAgcHJpdmF0ZSBjdXJyZW50U2VsZWN0ZWREZXRhaWxzOiBzdHJpbmc7XG4gIHByaXZhdGUgcGxhdGZvcm06IGFueTtcbiAgcHJpdmF0ZSBhY3RpdmU6IG51bWJlcjtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSl7XG4gICAgdGhpcy5wbGF0Zm9ybSA9IHBsYXRmb3JtTW9kdWxlO1xuXG5cbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHRoaXMucGxhdGZvcm0gPSBwbGF0Zm9ybU1vZHVsZTtcblxuICAgIHRoaXMud2hhdGlzID0gZmFsc2U7XG4gICAgdGhpcy50b2dnbGVSYW1GZWVkID0gZmFsc2U7XG4gICAgdGhpcy50b2dnbGVJc29sYXRlRXdlID0gZmFsc2U7XG4gICAgdGhpcy50b2dnbGVUZWFzZXJQcmVwID0gZmFsc2U7XG4gICAgdGhpcy50b2dnbGVKb2luVGVhc2VycyA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdGVkRGV0YWlscyA9IFwiXCI7XG5cblxuICB9XG5cblxuICBwdWJsaWMgdG9nZ2xlRGV0YWlscyhhcmdzOiBUb3VjaEdlc3R1cmVFdmVudERhdGEsIG5hbWUpe1xuICAgICAgICBpZihhcmdzLmFjdGlvbiA9PSBcImRvd25cIikge1xuICAgICAgICAgICAgLy8gdGhpcy5jbGVhclRvZ2dsZSgpO1xuICAgICAgICB9IGVsc2UgaWYoYXJncy5hY3Rpb24gPT0gXCJ1cFwiKSB7XG4gICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRTZWxlY3RlZERldGFpbHMgIT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXNbbmFtZV0gPSAhdGhpc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZERldGFpbHMgPSBuYW1lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZERldGFpbHMgPSBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgfVxuXG5cblxufVxuIl19