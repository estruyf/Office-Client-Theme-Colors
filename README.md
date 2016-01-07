# Office Client Theme Colors
This is a sample application to visualize the Office Client Theme Colors.

**Colorful**

![Colorful Office theme colors](http://az738237.vo.msecnd.net/wp-content/uploads/2016/01/010716_1158_UsingOffice2.png)

**Dark gray**

![Dark gray Office theme colors](http://az738237.vo.msecnd.net/wp-content/uploads/2016/01/010716_1158_UsingOffice3.png)

**White**

![White Office theme colors](http://az738237.vo.msecnd.net/wp-content/uploads/2016/01/010716_1158_UsingOffice4.png)

##Try it out
### Deploy add-in manifest
Add the manifest to a shared folder which you setup as Tusted add-in catalog location. More information about this approach can be found here: [Specify a file share as a trusted catalog](https://msdn.microsoft.com/en-us/library/office/fp123503.aspx).

### Get add-in running
1. Open command prompt and navigate to project directory
2. Run 'npm install' in root directory
3. Run 'gulp serve-static' to run the node web server

### Test add-in in Excel, PowerPoint or Word

 1. In the **Insert tab** in Excel, PowerPoint or Word 2016, choose **My Add-ins**.
 2. In the **Office Add-ins** dialog box, choose **Shared Folder**.
 3. Choose **Office Theme** > **Insert**. The add-in opens in a task pane and shows the add-in.

![Office Theme add-in](http://az738237.vo.msecnd.net/wp-content/uploads/2016/01/snip_20160107111646.png)

More information about this can be found here: [Using Office theme colors in your add-in](http://www.eliostruyf.com/using-office-theme-colors-add/).