import {Component, OnInit, Input} from '@angular/core'

class VBGBox{
    width: number;
    height: number;
}

class VBGZone extends VBGBox{
    top: number;
    left: number;
}

class VBGVideo extends VBGZone{
    sound:boolean;
}

class VBGInner extends VBGBox{
    constructor(){
        super();
        this.width= window.innerWidth;
        this.height= window.innerHeight;
    }
    ratio(){
       return this.width/this.height;
    }
}

@Component({
    selector:'video-background',
    template:'<div (window:resize)="onResize()" [style.min-width]="min.width+\'px\'" [style.min-height]="min.height+\'px\'" style="width:100vw; height:100vh;display:block;z-index:-1;position: absolute;overflow: hidden;">'+
             '<video [muted]="!video.sound" [style.top]="video.top" [style.left]="video.left" [style.width]="video.width" [style.height]="video.height" style="position:relative;" autoplay loop preload ><ng-content></ng-content></video>'+
             '</div>'
})
export class VideoBackgroundComponent implements OnInit {
    @Input () sound: boolean;
    main: VBGZone;
    video: VBGVideo;
    min: VBGBox;    
    @Input('min-height') minHeight: number;
    @Input('min-width') minWidth: number;    
    

    constructor (){         
        this.video= new VBGVideo;
        this.main= new VBGZone;
        this.min= new VBGBox;
    }

    //Implements
    ngOnInit(){                
        this.min.width=this.minWidth;
        this.min.height=this.minHeight;
        this.calc_resize();
    }

    //DOM events
    onResize(){
        this.calc_resize();
    }

    //Private functions
    private calc_resize() {   
        var inner= new VBGInner;        
        if( inner.ratio() > 1280/720){
            if( inner.width < this.min.width ){
                this.video.width=this.min.width;
                this.video.top=Math.round((inner.height - this.min.width*720/1280)/2);
            }
            else{
                this.video.width= inner.width;
                this.video.top=Math.round((inner.height- inner.width*720/1280)/2); 
            }
            this.video.height=null;                                  
            this.video.left=0;
        }
        else{
            if(inner.height<this.min.height){
                this.video.height=this.minHeight;
                this.video.left=Math.round((inner.width-this.min.height*1280/720)/2);
            }
            else{
                this.video.height=inner.height;
                this.video.left=Math.round((inner.width-inner.height*1280/720)/2);
            }
            this.video.width=null;
            this.video.top=0;   
        }
    }
}


