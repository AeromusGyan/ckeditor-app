import { Component, OnInit } from '@angular/core';
import AngularEditor from 'ckeditor5-custom-build/build/ckeditor';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	public watchdog: any;
	public ready = false;
	public htmlData:string = "<p>Hello, world!</p>"

	public Editor: any = AngularEditor;

	public isDisabled = false;

	public config = {
		
	}

	public onReady(editor: any): void {
		console.log(editor);
	}

	public ngOnInit(): void {
		const contextConfig: any = {
			foo: 'bar'
		};

		// this.config = {
		// 	collaboration: {
		// 		channelId: 'foobar-baz'
		// 	}
		// };

		// this.watchdog = new ContextWatchdog( );

		// this.watchdog.create( contextConfig )
		// 	.then( () => {
		// 		this.ready = true;
		// 	} );
	}

	public toggle(): void {
		this.isDisabled = !this.isDisabled;
	}


}
