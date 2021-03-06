/*
 * Handler用法练习，Handler在主线程中生成，负责联系主线程和子线程，更新主线程UI。
 * 子线程可以调用Handler的sendMessage方法发送消息到主线程消息队列，
 * Handler通过handleMessage方法处理消息队列中的消息。
 */


package com.example.union;

import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.app.Activity;
import android.view.Menu;
import android.widget.Button;

public class MainActivity extends Activity {
Handler1 handle1;
Thread1 thread1; 
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		handle1 = new Handler1();
		thread1 = new Thread1();
		new Thread(thread1).start();
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}
	
	class Handler1 extends Handler {
		  public Handler1() {
	
		  }
		  public Handler1(Looper L) {
			  super(L);
		  }
		  @Override
		  public void handleMessage(Message msg) {
			 super.handleMessage(msg);
			 Bundle b = msg.getData();
			 String txt = b.getString("text");
			 Button btn = (Button)findViewById(R.id.btnOK);		 
			 btn.setText(txt);
			  
		  }
	}
	
	class Thread1 implements Runnable {

		@Override
		public void run() {
			// TODO Auto-generated method stub
			try
			{
				Thread.sleep(5000);
			}
			catch(InterruptedException e)
			{
			    e.printStackTrace();
			}
			Message msg = new Message();
			Bundle bundle = new Bundle();
			bundle.putString("text", MainActivity.this.getString(R.string.btn_changed_text));
			msg.setData(bundle);
			MainActivity.this.handle1.sendMessage(msg);
		}
	}

}
