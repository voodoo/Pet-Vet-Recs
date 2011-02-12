
b_image_selected = false;


function getCam(){
	Titanium.Media.openPhotoGallery({

		success:function(event)
		{

			var cropRect = event.cropRect;

			// set image view
			Ti.API.debug('Our type was: '+event.mediaType);
			if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
			{
			  $image = event.media;
			  $thumb = event.thumbnail;
				imageView.image = $image;
				submitBtn.show();
				imageView.show();				
				uploadTable.updateRow(0,{title:'Image Selected', hasCheck: true, btnName:'image'})
			}
			else
			{

			}

			Titanium.API.info('PHOTO GALLERY SUCCESS cropRect.x ' + cropRect.x + ' cropRect.y ' + cropRect.y  + ' cropRect.height ' + cropRect.height + ' cropRect.width ' + cropRect.width);

		},
		cancel:function()
		{

		},
		error:function(error)
		{
		},
		allowEditing:true
		//popoverView:popoverView,
		//arrowDirection:arrowDirection,
		//mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO],
	});
}
