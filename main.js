// JS zoom effect for profile image on hover
document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.img-profile');
  if (!img) return;

  const toggle = () => img.classList.toggle('zoom-locked');

  img.addEventListener('click', toggle);
  img.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
  });

  // Click ra ngoài để tắt
  document.addEventListener('click', (e) => {
    if (img.classList.contains('zoom-locked') && !img.contains(e.target)) {
      img.classList.remove('zoom-locked');
    }
  });
});


// Full translation toggle for all main content
document.addEventListener('DOMContentLoaded', function() {
	const btn = document.getElementById('translateBtn');
	let translated = false;
	btn && btn.addEventListener('click', function() {
		if (!translated) {
			// Navigation
			let navLinks = document.querySelectorAll('.nav a');
			let navVN = ['Trang chủ', 'Dịch vụ', 'Kinh nghiệm', 'Kỹ năng', 'Học vấn', 'Liên hệ'];
			navLinks.forEach((el, i) => el.textContent = navVN[i]);
			btn.textContent = 'EN';

			// Hero
			document.querySelector('.hero-title').innerHTML = 'Xin chào, tôi là <span class="glowing-text">Trung</span>';
			document.querySelector('.hero-subtitle').textContent = 'Tôi là giảng viên lập trình và lập trình viên web.';
			document.querySelector('.hero-description').textContent = 'Đam mê giảng dạy lập trình và truyền cảm hứng cho học viên qua các dự án thực tế. Thành thạo việc đơn giản hóa các khái niệm phức tạp và hướng dẫn học viên xây dựng ứng dụng thực tế. Lập trình viên web sáng tạo, tập trung vào xây dựng website thân thiện, đáp ứng và mở rộng. Kết hợp chuyên môn kỹ thuật với gu thẩm mỹ để mang lại trải nghiệm số tuyệt vời.';

			// Buttons
			document.querySelector('.btn-primary').innerHTML = '<i class="fa-solid fa-phone"></i> Gọi ngay';
			document.querySelector('.btn-secondary').innerHTML = '<i class="fas fa-eye"></i> Xem công việc';

			// Services
			document.querySelector('#services .section-title').textContent = 'Dịch vụ';
			let serviceTitles = document.querySelectorAll('.service-title');
			let serviceDescriptions = document.querySelectorAll('.service-description');
			let serviceTitlesVN = [
				'Thiết kế giao diện người dùng',
				'Nghiên cứu trải nghiệm người dùng',
				'Thiết kế di động',
				'Lập trình Frontend',
				'Giảng dạy lập trình',
				'Đào tạo lập trình nâng cao'
			];
			let serviceDescriptionsVN = [
				'Tạo giao diện đẹp mắt, trực quan giúp nâng cao trải nghiệm và tăng sự tương tác. Tập trung vào xu hướng thiết kế hiện đại và tiêu chuẩn truy cập.',
				'Thực hiện nghiên cứu người dùng, kiểm thử và phân tích dữ liệu để đưa ra quyết định thiết kế và giải pháp lấy người dùng làm trung tâm.',
				'Thiết kế ứng dụng di động đáp ứng, tối ưu cho thao tác chạm, hiệu năng và tuân thủ hướng dẫn từng nền tảng.',
				'Hiện thực hóa thiết kế bằng mã nguồn sạch, hiệu quả với các framework hiện đại. Đảm bảo giao diện chuẩn xác và hiệu năng tối ưu.',
				'Chuyên giảng dạy các môn lập trình (Robotic, Scratch, GameMaker, Python, JavaScript, Web, Thuật toán, C/C++). Kinh nghiệm xây dựng chương trình, workshop thực hành, hướng dẫn học viên và chuẩn bị cho các dự án thực tế, cuộc thi.',
				'Cung cấp khóa học lập trình chuyên sâu cho mọi trình độ: tư duy thuật toán, lập trình thi đấu, học qua dự án, luyện thi. Hướng dẫn giải quyết bài toán thực tế, review code và chia sẻ kinh nghiệm nghề nghiệp.'
			];
			serviceTitles.forEach((el, i) => el.textContent = serviceTitlesVN[i]);
			serviceDescriptions.forEach((el, i) => el.textContent = serviceDescriptionsVN[i]);

			// Work Experience
			document.querySelector('#experience .section-title').textContent = 'Kinh nghiệm làm việc';
			let roles = document.querySelectorAll('.timeline-role');
			let companies = document.querySelectorAll('.timeline-company');
			let rolesVN = [
				'Lập trình viên Front End',
				'Giảng viên lập trình',
				'Giảng viên lập trình',
				'Giảng viên lập trình'
			];
			let companiesVN = [
				'XTPSoftware, Misa',
				'Trường THCS Ngọc Thụy',
				'Trung tâm MathExpress',
				'Trường Công nghệ MindX'
			];
			roles.forEach((el, i) => el.textContent = rolesVN[i]);
			companies.forEach((el, i) => el.textContent = companiesVN[i]);

			// Work Experience Details (ul/li)
			let expDetailsVN = [
				[
					'Áp dụng nguyên tắc thiết kế và phát triển web để xây dựng phần mềm ổn định.',
					'Kiểm thử để phát hiện lỗi và vấn đề kỹ thuật trước và sau khi triển khai.',
					'Tối ưu giao diện, xây dựng UI/UX.'
				],
				[
					'Giảng dạy Python, ôn luyện thi tin học trẻ cho học sinh.'
				],
				[
					'Giảng dạy lập trình Scratch và Gamemaker.'
				],
				[
					'Giảng dạy các môn lập trình cho trẻ em và thanh thiếu niên: Robotic, Scratch, Gamemaker, Website, Python App, C/C++. Nghiên cứu và phát triển chương trình máy tính cho học sinh từ 3-18 tuổi.'
				]
			];
			let expItems = document.querySelectorAll('#experience .timeline-item');
			expItems.forEach((item, i) => {
				let ul = item.querySelector('ul');
				if (ul && expDetailsVN[i]) {
					ul.innerHTML = expDetailsVN[i].map(txt => `<li>${txt}</li>`).join('');
				}
			});

			// Skills
			document.querySelector('#skills .section-title').textContent = 'Kỹ năng & Chuyên môn';
			let skillNames = document.querySelectorAll('.skill-name');
			let skillNamesVN = ['Robotic', 'Scratch', 'Gamemaker', 'ReactJS', 'NodeJS', 'JavaScript', 'C/C++', 'Python'];
			skillNames.forEach((el, i) => el.textContent = skillNamesVN[i]);

			// Education
			document.querySelector('#testimonials .section-title').textContent = 'Học vấn & Thành tích';
			let eduCards = document.querySelectorAll('.education-card');
			if (eduCards[0]) {
				eduCards[0].querySelector('.education-degree').textContent = 'Kỹ sư Công nghệ thông tin';
				eduCards[0].querySelector('.education-school').textContent = 'Đại học Thủy lợi Hà Nội';
				eduCards[0].querySelector('.education-year').textContent = '2018 - 2023';
				eduCards[0].querySelector('p').textContent = 'Chuyên ngành: Công nghệ thông tin.';
			}
			if (eduCards[1]) {
				eduCards[1].querySelector('.education-degree').textContent = 'Giải thưởng & Thành tích';
				eduCards[1].querySelector('.education-school').textContent = 'Thành tích học viên';
				eduCards[1].querySelector('.education-year').textContent = 'Thành tích & Giải thưởng';
				eduCards[1].querySelector('ul').innerHTML = '<li>Đạt danh hiệu giáo viên xuất sắc</li><li>Đạt giải nhì tin học trẻ MindX môn Python</li>';
			}

			// Footer
			let footerContent = document.querySelector('.footer-content');
			if (footerContent) {
				footerContent.innerHTML = '<p>&copy; 2025 Đỗ Thành Trung. Đã đăng ký bản quyền.</p><p>Thiết kế & xây dựng với niềm đam mê lập trình và giảng dạy.</p>';
			}

			translated = true;
		} else {
			window.location.reload(); // reload to restore English
		}
	});
});
