import {Component, OnInit, Input} from '@angular/core'

@Component({
    selector:'video-background',
    template:'<div (window:resize)="onResize()" style="block;width:100vw; height:100vh;z-index:-1;position: absolute;overflow: hidden;">'+
             '<video [muted]="!sound" [style.top]="vtop" [style.left]="vleft" [style.width]="vwidth" [style.height]="vheight" style="position:relative;" autoplay loop preload ><ng-content></ng-content></video>'+
             '</div>'
})
export class VideoBackgroundComponent implements OnInit {
    @Input () sound: boolean;
    vheight='';
    vwidth='';
    vtop=null;
    vleft=null;    

    constructor (){    
    }

    //Implements
    ngOnInit(){
        this.resize();        
    }

    //DOM events
    onResize(){       
        this.resize();
    }

    private resize() {
        var wh =window.innerHeight;
        var ww=window.innerWidth;
        if(ww/wh > 1280/720){
            this.vheight=null;
            this.vwidth= '100vw';                        
            this.vleft=0;
            this.vtop=Math.round((wh-ww*720/1280)/2)+'px';
        }
        else{
            this.vheight='100vh';
            this.vwidth=null;
            this.vtop=0;
            this.vheight= '100vh';
            var vw=wh*1200/720;
            this.vleft=Math.round((ww-wh*1280/720)/2)+'px';  
        }
    }
}
