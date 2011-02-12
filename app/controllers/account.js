var actInd = Titanium.UI.createActivityIndicator({
    height:30,
    width:30,
});

var account_win = Titanium.UI.createWindow({  
    title:'Account',
    backgroundImage:'img/bg.png',
    rightNavButton:actInd

});
var account_tab = Titanium.UI.createTab({  
    icon:'img/account.png',
    title:'Account',
    window:account_win
});

account_win.addEventListener('focus', function(){  
  actInd.hide();
});

Ti.include('app/views/account/ui.js', 'app/views/account/auth.js');

tabGroup.addTab(account_tab);  
