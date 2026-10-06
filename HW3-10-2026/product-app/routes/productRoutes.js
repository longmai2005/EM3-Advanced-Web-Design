const express = require('express');
    app.use(express.static('public')); // Để phục vụ các file tĩnh như hình ảnh  																				
																					
	// Sử dụng routes  																				
	app.use('/', productRoutes);  																				
																					
	// Khởi động server  																				
	app.listen(PORT, () => {  																				
	    console.log(`Server is running on http://localhost:${PORT}`);  																				
	});  	