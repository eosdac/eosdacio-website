![](https://i.imgur.com/tM0sTGz.png)

3 tháng 1, 2020


**MỚI: Khách hàng có thể tự động đăng nhập vào dApps WAX bằng cách khởi động nhanh Cổng Thông Tin Dành Cho Nhà Phát Triển WAX mới này**
=================================================================================================


Chúng tôi vừa thêm một tính năng vào Ví Đám Mây WAX để **cho phép các khác hàng dApp tự động đăng nhập vào dApps WAX yêu thích của họ, làm cho nó thậm chị nhanh và dễ dàng hơn để bắt đầu sử dụng các ứng dụng chạy trên Blockchain WAX.**

Với [công cụ khởi động nhanh WaxJS](https://developer.wax.io/waa/use-waxjs/), các nhà phát triển có thể khởi chạy một kiểm tra đơn giản và an toàn sẽ cho phép các khách hàng tự động đăng nhập vào dApp bất cứ khi nào họ truy cập nó.

Trước khi bạn có thể bắt đầu ký duyệt giao dịch từ dApp của mình, một khách hàng phải đăng nhập. WaxJS bao gồm một chức năng isAutoLoginAvailable sẽ:

-   Kiểm tra an toàn thông tin đăng nhập Ví Đám Mây WAX
-   Kiểm tra xem dApp của bạn có nằm trong danh sách trắng không

Nếu cả hai điều kiện đều đúng, userAccount của khách hàng và các khóa công khai được thiết lập trong đối tượng WaxJS và bạn không cần phải gọi chức năng login(). Bạn cũng sẽ có quyền truy cập vào wax.userAccount và wax.pubKeys.

Khách hàng tiết kiệm số lần nhấn và thời gian, do vậy họ có thể bắt đầu sử dụng dApp chỉ trong vài giây.

Bạn muốn xem nó hoạt động như thế nào? Hãy xem tính năng autologin hoạt động [tại đây](https://developer.wax.io/waa/waxjs-demo/).

![](https://i.imgur.com/uyAyqUf.png)

---

*Truy cập [WAX Developer Hive](https://developer.wax.io/) để dùng tất cả tài nguyên dành cho nhà phát triển của chúng tôi và tham gia các cộng đồng của chúng tôi để cập nhật về sự phát triển của WAX:*

-   [*WAX Developer Telegram Channel*](https://t.me/waxdevelopers)
-   [*WAX Telegram Discussion Channel*](https://t.me/wax_io)
-   [*WAX Telegram Announcements
    Channel*](https://t.me/waxtokenannoucements)
-   *[WAX Twitter](https://twitter.com/wax_io)*