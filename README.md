# Using URL Schemes.
### 1. IOS:

 **Step 1**: **Open Xcode ⇒ root folder ⇒ Info ⇒ scroll to URL Types** 
 
<img width="1100" alt="Screenshot 2023-08-15 at 11 20 22" src="https://github.com/T30-H0/AnyApp/assets/107106784/72325d3a-df67-41e9-9449-eb7dbc75218e">

**Step 2**: Click **“+”** in **URL Types** section and add your own scheme, ex : **anyapp**

<img width="712" alt="Screenshot 2023-08-15 at 11 33 54" src="https://github.com/T30-H0/AnyApp/assets/107106784/8a7a54ba-1794-4c4b-9b72-595222c00803">


**Step 3**: **Testing**: Rebuild your app then Open Safari on your simulator and type your own scheme. Example: **anyapp://**

### 2. Android

**Step 1**: **Go to android ⇒ app ⇒ src ⇒main ⇒ AndroidManifest.xml**

**Step 2**: Add the new **intent-filte**r inside the **MainActivity** entry with a **VIEW** type action:

```xml
<activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
        android:launchMode="singleTask"
        android:windowSoftInputMode="adjustResize"
        android:exported="true">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>

        <intent-filter>
          <action android:name="android.intent.action.VIEW" />
          <category android:name="android.intent.category.DEFAULT" />
          <category android:name="android.intent.category.BROWSABLE" />
          <data android:scheme="anyapp" /> //replace "anyapp" with your scheme
        </intent-filter>
      </activity>
```

**Step 3**: **Testing**: 

- **on Emulator**: run this command in terminal
    
    *adb shell am start -W -a android.intent.action.VIEW -d "**anyapp://**" **com.anyapp.develop*** (**com.anyapp.develop** is your package name, you can find it in android/app/src/main/java/com/**yourApp**/MainApplication.java)
    
- on **Physical device**: send a message on some app that supports deep link, such as **Slack**.
    
    Example: hello **anyapp://deeplink**

# Using Universal Links.
### 1. IOS:

**Step 1**: You need to have an ***“apple-app-site-association”*** set up as your **BE side**, it should be looks like the picture below:

![Screenshot 2023-08-21 at 10 17 42](https://github.com/T30-H0/AnyApp/assets/107106784/9444fbe5-a84d-4b21-9875-a5572dcfe86f)


**Step 2: Open Xcode ⇒ root folder ⇒ Signing & Capabilities ⇒ “+ Capability”:**

![Screenshot 2023-08-21 at 11 57 51 16 22 34](https://github.com/T30-H0/AnyApp/assets/107106784/0d0f40a5-62de-45d9-950f-15accd7ab59d)



**Step 3:** Enter **“ass”** in the search bar ⇒ select **“Associated Domains”** and then enter your app links :

![Screenshot 2023-08-21 at 11 59 40 16 22 34](https://github.com/T30-H0/AnyApp/assets/107106784/651692ab-8cbd-42df-97a5-0fcf6c570365)


![Screenshot 2023-08-21 at 12 03 17 16 22 33](https://github.com/T30-H0/AnyApp/assets/107106784/0e848b28-0821-435b-af86-ab739ae416e3)



**Step 4**: Go to this link: https://reactnative.dev/docs/0.71/linking#enabling-deep-links and follow these guides for IOS here: 

![Screenshot 2023-08-21 at 14 22 05](https://github.com/T30-H0/AnyApp/assets/107106784/4440e617-a218-449e-addc-59077c9a7d51)


**Step 5**: **Testing:** Open **Safari**  and enter your app links, in this example: ***demo-project-4u6n.onrender.com/***

### 2. Android (aka **app-links**)

**Step 1**:  You need to have an ***“applinks.json”*** set up as your **BE side**, it should be looks like the picture below:

![Screenshot 2023-08-21 at 16 08 07](https://github.com/T30-H0/AnyApp/assets/107106784/393b5330-6d06-4f9a-bf7e-218a4daba96f)


**Step 2**: Duplicate the new **intent-filter** in **AndroidManifest.xml,** it should be looks like this code below:

```xml
<activity
      android:name=".MainActivity"
      android:label="@string/app_name"
      android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
      android:launchMode="singleTask"
      android:windowSoftInputMode="adjustResize"
      android:exported="true">
      <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
      </intent-filter>

      <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="anyapp" />
      </intent-filter>
      
      <!-- Make sure you explicitly set android:autoVerify to "true". -->
      <intent-filter android:autoVerify="true">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />

        <!-- If a user clicks on a shared link that uses the "http" scheme, your
       app should be able to delegate that traffic to "https". -->
        <data android:scheme="http" />
        <data android:scheme="https" />

        <!-- Include one or more domains that should be verified. -->
        <data android:host="demo-project-4u6n.onrender.com" />
      </intent-filter>
    </activity>
```

**Step 3**: **Testing**

- **on Emulator**: run this command in your terminal:
    
    *adb shell am start -W -a android.intent.action.VIEW -d "[https://demo-project-4u6n.onrender.com](https://demo-project-4u6n.onrender.com/)" com.anyapp.develop*
    
- on **Physical device**: send a message on some app that supports deep link, such as **Slack**.
    
    Example: **https://demo-project-4u6n.onrender.com**
    
    *Tips: If app-links doesn’t open your app after clicking on the link, try this:* 
    
    ***cd android && ./gradlew** **clean** and then **reinstall your app***
