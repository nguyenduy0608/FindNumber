import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      vi: {
        translation: {
          description: {
            part1: " Công cụ này là gì?",
            part2: 'Công cụ có tên "Tìm ID Facebook" này cung cấp một cách dễ dàng và nhanh chóng để tìm ID Facebook cho hồ sơ của bạn hoặc một nhóm hoặc một trang. Ngoài ra còn có các thông tin khác như Tên người dùng, Tên, Loại, ...',
            part3:'- Đối với loại Hồ sơ: Ảnh hồ sơ, Id, Tên người dùng, Tên, Id trang cũ (nếu chuyển đổi từ trang cổ điển)',
            part4:'- Đối với loại Trang: Ảnh trang, Id, Tên người dùng, Tên, Số lượng người thích, Mô tả.',
            part5:'- Đối với loại Nhóm: Ảnh nhóm, Id, Tên người dùng, Tên, Số lượng thành viên, Thông tin riêng tư.',
            part6:'Làm thế nào để sử dụng?',
            part7:'Công cụ này chấp nhận URL của Facebook, hãy xem các định dạng URL mẫu sau:',
            part8:'Đặt URL Facebook của bạn và nhấp vào nút "Tìm ID số →" hoặc chỉ cần nhấn enter. ID số sẽ xuất hiện trong hộp màu xanh lá cây.',
            part9:'Tại sao sử dụng công cụ này?',
            part10:'1. Số ID Facebook cần thiết khi lấy một số dữ liệu từ Facebook.',
            part11:'2. Bạn sẽ biết vị trí của mình trong lịch sử Facebook. Ví dụ, chúng ta sẽ nhập URL https://www.facebook.com/zuck vào khung văn bản bên dưới, ID trích xuất sẽ hiển thị "4" có nghĩa là anh ấy là một trong những người dùng hoặc ghi sớm nhất trong cơ sở dữ liệu của Facebook.',
            part12: 'TÌM SỐ ĐIỆN THOẠI',
            part13: 'Nhập đường dẫn FaceBook :',
            part14:'Tìm số điện thoại',
            part15:"Nhập đường dẫn muốn tìm số điện thoại vào đây...",
            part16:'Số điện thoại :',
            part17:'Không tìm thấy',
            part18:'Hiển thị ở đây'
          }
        }
      },
      en:{
        translation :{
            description: {
                part1: 'What is this tool?',
                part2: 'This tool called "Find Facebook ID" provides an easy and fast way to find the Facebook ID for your profile or a group or a page. There is also other information such as User name, Name, Type, ...',
                part3:'- For Profile type: Profile picture, Id, User name, Name, Old page id (if converted from classic page)',
                part4:'- For Page type: Page picture, Id, User name, Name, Likers count, Description',
                part5:'- For Group type: Group picture, Id, User name, Name, Members count, Privacy info.',
                part6:'How to use?',
                part7:'This tool accepts Facebook URL, see the following example URL formats below:',
                part8:'Put your Facebook URL and click the "Find numeric ID →" button, or simply press enter. The numeric ID will appear in the green box.',
                part9:'Why use this tool?',
                part10:'1. Numeric Facebook IDs are needed when retrieving some data from Facebook.',
                part11:'2. You will kinda know your place in Facebook history. For example, we will enter the URL https://www.facebook.com/zuck on the text box below, the extracted ID will show "4" which means he is one of the earliest users or records in Facebook database.'
                ,part12 : "FIND NUMBER PHONE" ,
                part13: 'Enter the FaceBook path:',
                part14:'Find phone number',
                part15:"Enter the path to find the phone number here ...",
                part16:'Number phone :',
                part17:'Not found' ,
                part18:'Show up here'
    }}}
}
  });

export default i18n;