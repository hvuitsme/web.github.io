// JavaScript to toggle dark mode
// document.getElementById('darkModeToggle').addEventListener('change', function(event){
//   if(event.target.checked){
//     document.documentElement.setAttribute('data-bs-theme', 'dark');
//   } else {
//     document.documentElement.removeAttribute('data-bs-theme');
//   }
// });

// document.getElementById('darkModeToggle').addEventListener('change', function(event){
//   if(event.target.checked){
//       document.documentElement.setAttribute('data-bs-theme', 'dark');
//       // Thay đổi màu nền của thẻ span khi ở chế độ dark mode
//       document.querySelector('.border-opacity-100').style.backgroundColor = '#333'; // Màu tối
//   } else {
//       document.documentElement.removeAttribute('data-bs-theme');
//       // Thay đổi màu nền của thẻ span khi ở chế độ light mode
//       document.querySelector('.border-opacity-100').style.backgroundColor = '#eef5ff'; // Màu sáng
//   }
// });

document.getElementById('darkModeToggle').addEventListener('change', function(event){
  if(event.target.checked){
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      // Thay đổi màu nền của thẻ span khi ở chế độ dark mode
      document.querySelector('.border-opacity-100').style.backgroundColor = '#333'; // Màu nền tối
      // Thay đổi màu viền của button
      document.querySelectorAll('.btn').forEach(function(button){
          button.style.borderColor = 'yellow';
      });
      // Thay đổi màu viền của thẻ i
      document.querySelectorAll('i.fab').forEach(function(button){
        button.style.borderColor = 'yellow';
      });
      // Thay đổi màu chữ của thẻ span và chữ trong button
      document.querySelectorAll('.nav-pills button, .filter_txt, .item-text').forEach(function(element) {
            element.style.color = 'yellow';
      });
      // Thay đổi màu chữ của thẻ i
      document.querySelectorAll('i').forEach(function(element) {
        element.style.color = 'yellow';
      });
      // Thay đổi màu chữ trong navbar
      document.querySelectorAll('.navbar-dark .navbar-nav .nav-link').forEach(function(navLink){
          navLink.style.color = 'yellow';
      });
      // Thay đổi màu chữ của "New Order" sang màu vàng
      const newOrderButton = document.querySelector('.btn-primary.col-6');
      if (newOrderButton) {
        newOrderButton.style.color = 'yellow';
      }
      // Thay đổi màu chữ của "Back" sang màu vàng
      const newBackButton = document.querySelector('.btn-outline-primary.back-button.ms-auto.text-end.m-2');
      if (newBackButton) {
        newBackButton.style.color = 'yellow';
      }

      // Thay đổi màu chữ trong thẻ h2 
      // document.querySelectorAll('h2.text-primary.m-2').forEach(function(navLink){
      //   navLink.style.color = 'yellow';
      // });


      // document.querySelectorAll('.nav-pills button, .filter_txt, .item-text').forEach(function(element) {
      //   if (element.childNodes.length === 0 && element.nodeType === 1) {
      //       // Chỉ thực hiện đổi màu nếu phần tử không có con và là một phần tử thực sự (nodeType === 1)
      //       element.style.color = 'yellow';
      //   }
      // });

      
  } else {
      document.documentElement.removeAttribute('data-bs-theme');
      // Thay đổi màu nền của thẻ span khi ở chế độ light mode
      document.querySelector('.border-opacity-100').style.backgroundColor = '#eef5ff'; // Màu nền sáng
      // Thay đổi màu viền của button
      document.querySelectorAll('.btn').forEach(function(button){
          button.style.borderColor = '#0d6efd';
      });
      // Thay đổi màu chữ của thẻ span và chữ trong button
      document.querySelectorAll('.nav-pills button, .filter_txt, .item-text, #text').forEach(function(element){
          element.style.color = '#0d6efd';
      });
      // Thay đổi màu chữ trong navbar
      document.querySelectorAll('.navbar-dark .navbar-nav .nav-link').forEach(function(navLink){
          navLink.style.color = '#0d6efd';
      });
      // Thay đổi màu chữ của "New Order" sang màu vàng
      const newOrderButton = document.querySelector('.btn-primary.col-6');
      if (newOrderButton) {
        newOrderButton.style.color = '#fff';
      }
      // Thay đổi màu chữ của "Back" sang màu xanh
      const newBackButton = document.querySelector('.btn-outline-primary.back-button.ms-auto.text-end.m-2');
      if (newBackButton) {
        newBackButton.style.color = '#0d6efd';
      }

      // Thay đổi màu nền span trong Order b1
      document.querySelectorAll('span.border-opacity-100.m-1.align-self-center').forEach(function(navLink){
        navLink.style.backgroundColor = '#d7f3eb';
      });

      // Thay đổi màu chữ trong thẻ h2 
      // document.querySelectorAll('h2.text-primary.m-2').forEach(function(navLink){
      //   navLink.style.color = '#d7f3eb';
      // });

  }
});
      // dành cho modal
      $(document).ready(function () {
        $('#modalSystem').modal('show');
      });
      // dành cho hành động sang đường dẫn cụ thể
      function openLink(link) {
        window.open(link, '_blank');
      }

// Các câu ngẫu nhiên

// Biến để theo dõi chỉ số của câu văn bản hiện tại
let currentIndex = 0;

// Hàm chọn ngẫu nhiên một câu từ mảng
function getRandomText() {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
}

// Hàm cập nhật nội dung của thẻ div
function updateRandomText() {
    const randomTextContainer = document.querySelector('.random-text');
    if (randomTextContainer) {
        // Lấy câu tiếp theo hoặc ngẫu nhiên nếu đã hết
        const newText = currentIndex < randomTexts.length ? randomTexts[currentIndex] : getRandomText();

        // Cập nhật nội dung và tăng chỉ số
        randomTextContainer.textContent = newText;
        currentIndex = (currentIndex + 1) % randomTexts.length;
    }
}

// Gọi hàm cập nhật lúc trang web được tải
document.addEventListener('DOMContentLoaded', function () {
    // Cập nhật ngay khi trang được tải
    updateRandomText();

    // Thiết lập interval để cập nhật mỗi 5 giây
    setInterval(updateRandomText, 5000);
});

const randomTexts = [
  'Hôm nay trời nắng rực, bầu trời xanh ngắt và gió nhẹ nhàng làm tôi cảm thấy thoải mái',
  'Cuộc sống là một chuỗi những thách thức, nhưng đôi khi những thách thức đó là cơ hội để ta trưởng thành',
  'Chân trời phía xa mờ nhòe, tôi bắt gặp một chú chim nhỏ đang bay vút cao',
  'Đôi khi, cuộc sống là những khoảnh khắc đơn giản, nhưng lại mang đến niềm vui to lớn',
  'Cây cỏ xanh tốt, nước sông chảy rì rào, tôi ngồi đây nhìn những điều tuyệt vời của thiên nhiên',
  'Đèn đường lung linh khi mặt trời lặn, tạo nên bức tranh hoàng hôn tuyệt vời',
  'Đôi khi, chúng ta cần dừng lại, thư giãn và đắm chìm trong những khung cảnh đẹp xung quanh',
  'Sự đa dạng của thế giới là một kho báu, hãy trân trọng và bảo vệ nó',
  'Trí tưởng tượng của con người là vô hạn, chúng ta có khả năng tạo ra những điều kỳ diệu',
  'Đôi khi, chỉ cần một nụ cười nhỏ có thể làm thay đổi cả ngày của bạn',
  'Dòng suối nhỏ chảy quanh co qua đồng cỏ xanh mướt, tạo nên hình ảnh hữu tình',
  'Bức tranh màu nước trên tường như một tác phẩm nghệ thuật sống động',
  'Điều quan trọng nhất trong cuộc sống là biết cảm ơn những gì mình đã có',
  'Khi bạn nhìn thấy một bông hoa nở rộ, bạn có thể cảm nhận được sức sống và tươi mới',
  'Mỗi ngày là một cơ hội mới để học hỏi và phát triển bản thân',
  'Hành động nhỏ từ trái tim có thể tạo ra những thay đổi lớn trong cộng đồng',
  'Giữa thế giới ồn ào, tôi tìm thấy bình yên trong những khoảnh khắc yên tĩnh',
  'Tâm hồn con người là như một cuốn sách, mỗi trang kể một câu chuyện riêng biệt',
  'Bàn tay nghệ sĩ có thể biến những viên đá lạnh lẽo thành tác phẩm nghệ thuật ấn tượng',
  'Mỗi bước đi là một hành trình, mỗi hành trình là một cơ hội mới để phát triển',
];
