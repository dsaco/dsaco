package com.dsaco.rnupgrade;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.io.File;
import java.util.Map;
import java.util.HashMap;

import android.app.Activity;
import android.content.Intent;
import android.content.Context;
import android.net.Uri;
import android.os.Build;


public class UpgradeModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;


    public UpgradeModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "UpgradeModule";
    }

    @ReactMethod
    public void install(final String path, Callback successCallback) {
        File file = new File(path);
        try {
            if (file.exists()) {
                Intent intent = new Intent(Intent.ACTION_VIEW);
                intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                if (Build.VERSION.SDK_INT >= 24) {
                    Uri contentUri = UpgradeFileProvider.getUriForFile(reactContext, "com.dsaco.rnupgrade.UpgradeFileProvider", file);
                    intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                    intent.setDataAndType(contentUri, "application/vnd.android.package-archive");

                } else {
                    intent.setDataAndType(Uri.fromFile(file), "application/vnd.android.package-archive");
                }
                reactContext.startActivity(intent);
                    
            } else {
                successCallback.invoke("安装包不存在");
            } 
        } catch (Exception e) {
            successCallback.invoke("安装失败");
        }
    }
}