---
layout: post
title:  "Chức Năng Bỏ Phiếu Bầu Ứng Viên Giám Hộ Đã Mở!"
date:   2018-12-17T04:18:33
external_link: https://steemit.com/eosdac/@eosdacvietnam/chuc-nang-b-phieu-bau-ung-vien-giam-ho-da-mo
---
Chúng tôi rất vui mừng thông báo việc bỏ phiếu bầu ứng viên giám hộ eosDAC hiện đã mở! Một khi chúng tôi đạt được ngưỡng 15% số người sở hữu token EOSDAC tham gia bỏ phiếu cho các ứng viên, DAC sẽ được chuyển giao sự quản trị cho 12 ứng viên nhận được nhiều phiếu bầu nhất thông qua các quyền hạn tự động thay đổi trên tài khoản [dacauthority](https://www.bloks.io/account/dacauthority).

![](https://cdn.steemitimages.com/DQmX8qjASWwa6ZmTKa8y9M2UVmhjPPmB2xrKx5r3Z54bcpA/image.png)

Cộng đồng eosDAC đã làm việc chăm chỉ để đạt được thời khắc quan trọng này, bao gồm nhiều yêu cầu ngoài chuỗi chẳng hạn như việc [thành lập Quỹ Tài Trợ DAC](https://steemit.com/eosio/@eosdacvietnam/eosdac-thong-bao-viec-thanh-lap-quy-tai-tro-dac) và [bảo đảm các điều khoản thương mại với một công ty dịch vụ](https://steemit.com/eosio/@eosdacvietnam/eosdac-chuan-bi-sap-xep-chuyen-doi-sang-quan-tri-cua-nguoi-giam-ho), cụ thể là Dacoco Gmbh. Tất cả các thành viên của eosDAC hiện tại có thể bỏ phiếu bầu cho các ứng viên giám hộ mà họ tin tưởng sẽ đảm bảo giá trị lâu dài cho DAC.

Thật vậy, bằng mô hình phi tập trung, bạn có thể xây dựng Công Cụ Thành Viên EOS cho chính bạn và chạy nó cục bộ bằng cách sử dụng bộ mã nguồn trên [Github của chúng tôi tại đây](https://github.com/eosdac/eosdactoolkit/releases) để bỏ phiếu cho các ứng viên yêu thích của mình. Bạn cũng có thể sử dụng phiên bản được lưu trữ tại https://members.eosdac.io/ Chỉ việc ấn vào chỉ mục Bỏ Phiếu Bầu Người Giám Hộ, xem lại hồ sơ của các ứng viên, nhấn nút + bên cạnh 5 ứng viên bạn thích, và rồi ấn Nộp Phiếu Bầu Của Tôi.

Chỉ vậy thôi!

Một khi đạt được ngưỡng 15%, các quyền hạn của DAC sẽ được chuyển giao nên bộ mã nguồn và các quỹ dùng để vận hành DAC sẽ được kiểm soát bởi các ứng viên giám hộ được bầu ra thông qua việc bỏ phiếu trên chuỗi bằng các lá phiếu EOSDAC của các thành viên đã đăng ký của eosDAC. Đây là một cột mốc lớn của chúng tôi với tư cách là Nhà Sản Xuất Block EOS thuộc sở hữu của cộng đồng và Kích Hoạt DAC. Mục tiêu của chúng tôi là cung cấp kỹ thuật dẫn đầu và trả lời trực tiếp cho cộng đồng EOS. Chúng tôi cũng đang mở đường cho một tương lai phi tập trung hóa hơn vì chúng tôi không chỉ xây dựng mà còn sử dụng các công cụ để kích hoạt Các Cộng Đồng Tự Trị Phi Tập Trung.

Cám ơn bạn đã tiếp tục hỗ trợ khi chúng tôi xây dựng các công cụ kích hoạt DAC mã nguồn mở này. Vui lòng bỏ phiếu cho eosdacserver để hỗ trợ công việc của chúng tôi và nếu bạn vẫn chưa đăng ký thành viên, hãy đăng ký thành viên eosDAC và sử dụng token EOSDAC của bạn để bầu ra các người giám hộ và giúp đỡ chúng tôi khởi chạy DAC hoàn toàn bằng cách đạt được 15% phiếu bầu.

Để biết thêm chi tiết về cấu trúc kỹ thuật hiện tại của DAC, hãy đọc tiếp phần sau!

<h1>Về Các Tài Khoản EOS và Mã Nguồn, eosDAC là gì?</h1>Tài khoản EOS chính kiểm soát DAC được gọi là [dacauthority](https://www.bloks.io/account/dacauthority). Nhấn vào "permissions" trên công cụ tra cứu bloks.io để xem cách nó được thiết lập:

![](https://cdn.steemitimages.com/DQmbn9jNU2JqkcmyfBxi13z5Jd4CXDWq646Yp5B9FiXmZ9i/image.png)

Tạm thời, nhóm sản xuất block đầu tiên của Rob, Michael, và Luke sẽ duy trì quyền truy cập vào khóa owner EOS5XZMyRHJdq8DaCQbeK63SoAo1vmCLbW9bnvbiFPGYSGEsbVNxp trong một khoảng thời gian để khắc phục bất kỳ sự cố kỹ thuật phát sinh chẳng hạn như lỗi kỹ thuật ngăn chặn các người giám hộ được bầu khỏi việc hoàn thành vai trò của họ hay một vài lỗi trong mã nguồn mà có thể chưa được sửa chữa.  Sau khi có đủ tự tin vào cộng động, khóa này sẽ được thiết kế lại. Các quyền cao, trung bình và thấp tương ứng với các ngưỡng yêu cầu được nêu trong [hiến pháp eosDAC](https://members.eosdac.io/constitution). Một khi DAC đạt được ngưỡng 15%, các quyền cao, trung bình và thấp và các quyền khác sẽ được cập nhật để trở thành các tài khoản của những người giám hộ được bầu.

Tài khoản nhà sản xuất block [eosdacserver](https://www.bloks.io/account/eosdacserver) hiện cũng được kiểm soát thông qua đa chữ ký từ Rob, Michael và Luke như bạn có thể thấy ở đây:

![](https://cdn.steemitimages.com/DQmQ21AcDARsSHSijnqA3RR7uog2trDfk7RZpvJPWXmtkom/image.png)

Ngoài ra còn có các quyền hạn bổ sung được cấu hình cho các hành động cụ thể trên chuỗi chẳng hạn như yêu cầu phần thưởng của nhà sản xuất block.

Rob, Michael, và Luke có một [đề xuất công việc đang hoạt động](https://eosdac.io/active-worker-proposals/) để cung cấp các dịch vụ sản xuất block cho DAC và trong tương lai, quyền kiểm soát tài khoản đó cũng sẽ được trao lại cho DAC để, nếu các chủ sở hữu token quyết định thông qua các đại diện giám hộ để thay thế Rob, Michael, và Luke, họ sẽ có khả năng trên chuổi để làm điều đó. Điều này rất quan trọng vì chúng tôi định nghĩa sự phi tập trung là không có điểm thiếu sót duy nhất nào.

Phần tiếp theo của DAC là tài khoản [eosdactokens](https://www.bloks.io/account/eosdactokens) có tất cả các mã nguồn cho token EOSDAC bao gồm việc đăng ký thành viên mà [bạn có thể xem xét tại đây](https://github.com/eosdac/eosdactoken). Như bạn có thể thấy, toàn bộ quyền kiểm soát tài khoản này nằm trong tay dacauthority, sẽ được kiểm soát bởi các người giám hộ khi chúng tôi đạt được ngưỡng bỏ phiếu 15% cần thiết để khởi chạy DAC:

![](https://cdn.steemitimages.com/DQmXroNC96HpYHY7UfHDM2N6RAeDY9RoQUD64ZCcjHMCf4j/image.png)

Chức năng chính của DAC có thể tìm thấy trong tài khoản [daccustodian](https://www.bloks.io/account/daccustodian) với bộ mã mà [bạn có thể xem ở đây](https://github.com/eosdac/daccustodian). Nó bao gồm các chức năng như yêu cầu thanh toán, đề cử người giám hộ, bỏ phiếu, cập nhật cấu hình và hơn thế nữa:

![](https://cdn.steemitimages.com/DQmV51JmYyeEmMok6guTn1mKiZiSLw7Usy9AcwHMChUNRie/image.png)

Các quyền trên tài khoản này một lần nữa được kiểm soát bởi dacauthority với quyền phụ thời gian trễ xfer, do đó tất cả các giao dịch mã hóa sẽ phải trì hoãn giao dịch trong 1 giờ. Mục đích của sự chậm trễ này là để đảm bảo mã nguồn hoạt động như mong đợi và nếu ở một chỗ nào đó trong bộ mã, một giao dịch được thực thi không chính xác, chúng tôi có thể có thời gian với tư cách là một DAC để sửa nó trước khi DAC mất tiền không hợp lý.

![](https://cdn.steemitimages.com/DQmXHz424rK7n8VuS9j4Ga2cBC7pqeBzQsmTa7E18N3v4un/image.png)

Các quỹ chính của DAC được nắm giữ bởi tài khoản [eosdacthedac](https://www.bloks.io/account/eosdacthedac), một lần nữa được kiểm soát bởi dacauthority và cũng có quyền thời gian trễ xfer tương tự.

Bộ mã mà chúng tôi vẫn đang làm việc bao gồm các chức năng để giúp các người giám hộ [phê duyệt các đề xuất đa chữ ký trên chuỗi](https://github.com/eosdac/dacmultisigs) thông qua công cụ thành viên của chúng tôi. Chúng tôi cũng đang xây dựng một [hệ thống đề xuất công việc](https://github.com/eosdac/dacproposals) đầy đủ, điều này sẽ tạo thuận lợi cho tất cả công việc mà DAC đang làm.

Khi chúng tôi tiếp tục xây dựng và hoàn thiện quá trình vận hành các DAC trên phần mềm EOSIO, chúng tôi cũng sẽ tiếp tục khám phá [Sáng Kiến Chuỗi DAC](https://steemit.com/eos/@eosdacvietnam/sang-kien-ve-chuoi-dac-kham-pha-ve-cach-su-dung-chuoi-canh-chuoi-rieng-biet-co-the-tao-ra-loi-ich-cho-cong-dong-tu-tri-phi-tap) để các chức năng DAC cốt lõi này sẽ có sẵn cho các DAC tương lai dưới dạng các hợp đồng cấp hệ thống trên Chuỗi DAC.

Như mọi khi, chúng tôi chào đón bất kỳ phản hồi nào và khuyến khích tất cả các bạn tham gia vào cộng đồng của chúng tôi trên discord:
http://discord.io/eosdac

Cảm ơn bạn một lần nữa vì sự khuyến khích và hỗ trợ khi chúng tôi làm việc để đạt được cột mốc này.

Bây giờ hãy bước ra và bỏ phiếu bầu cho các ứng viên của eosDAC! :)
https://members.eosdac.io

- Luke

<center>[![](https://cdn.steemitimages.com/DQmReQj3D2My9so7vzqE9rRppYULYeDhnvZxdyEeJNTdNja/image.png)](https://eosdac.io)</center>

<iframe width="640" height="360" src="https://www.youtube.com/embed/PbQpAJOP6iA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<center><h2>Hãy bỏ phiếu cho eosdacserver</h2></center>
Đăng ký [bản tin của chúng tôi](https://eosdac.io/news/#newsletter) để nhận thông báo và theo dõi chúng tôi trên các nền tảng mạng xã hội yêu thích của bạn:

 <sub><a href="https://steemit.com/@eosdac">Steemit</a> | <a href="http://discord.io/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Discord</a> | <a href="https://t.me/eosdacio" rel="nofollow noopener" title="This link will take you away from steemit.com">Telegram</a> | <a href="https://facebook.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Facebook</a> | <a href="https://twitter.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Twitter</a> | <a href="https://plus.google.com/+eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Google-plus</a> | <a href="https://github.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Github</a> | <a href="https://instagram.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Instagram</a> | <a href="https://linkedin.com/company/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Linkedin</a> | <a href="https://medium.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Medium</a> | <a href="https://www.reddit.com/r/EOSDAC/" rel="nofollow noopener" title="This link will take you away from steemit.com">Reddit</a> | <a href="https://www.youtube.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">YouTube</a> | <a href="http://weibo.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Weibo</a>| <a href="https://vk.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">VK</a>| <a href="https://bihu.com/people/586348" rel="nofollow noopener" title="This link will take you away from steemit.com">Bihu</a></sub>
