import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useTheme } from 'react-native-paper'
import Header from "../components/Header";
import Icon from "react-native-vector-icons/Entypo"
export default function News3({ navigation }) {
  const { colors } = useTheme()
  return (
    <View>
      <Header title="Bài viết" type="arrow-left" navigation={navigation} />
      <ScrollView>
        <View style={{ marginTop: 5, marginRight: 10, marginLeft: 10,height:6650 }}>
          <Text style={{ fontSize: 27, color: colors.text, fontWeight: "bold" }}>Bài báo cáo đặc biệt phần 2: Tình trạng viêm mãn tính</Text>
          <Text style={{
            marginTop: 7,
            fontSize: 22,
            color: colors.text,
            fontWeight: "bold"
          }}>Tình trạng viêm mãn tính trong cơ thể là gì?</Text>
          <Text style={{
            marginTop: 7,
            fontSize: 17,
            color: colors.text
          }}>Hầu hết các bệnh mãn tính phát triển trong một thời gian dài và thường là kết quả của sự tích tụ những vấn đề sức khỏe “tí hon” bên trong cơ thể chúng ta. Mặc dù các nhà khoa học vẫn đang trên hành trình khám phá các cơ chế của nhiều bệnh mãn tính, một chủ đề chung luôn nhen nhóm trong đầu họ - một sự “bí ẩn” mê hoặc các nhà khoa học này là trạng thái kì diệu của quá trình viêm trong cơ thể.</Text>
          <Image
            source={{ uri: "https://www.medigoapp.com/uploads/Tinh_trang_viem_man_tinh_eb23113d9a.jpg" }}
            style={{ width: 370, height: 200, marginTop: 10, resizeMode: 'contain' }}
          />
          <Text style={{
            marginTop: 7,
            fontSize: 17,
            color: colors.text
          }}>Viêm là một cơ chế cơ thể tạo ra để bảo vệ chính mình khỏi nhiễm trùng, chất độc và các chấn thương, nó cũng đóng góp trong việc sửa chữa những hư hỏng đang xảy ra trong cơ thể. Phản ứng viêm kích hoạt một loạt các phản ứng miễn dịch, là “đầu tàu” trong quá trình dọn dẹp vi trùng, tế bào chết và sửa chữa những tế bào bị thương. Khi bạn làm bếp và bị đứt tay, ngoài cảm giác đau nhói, hãy để ý rằng khu vực xung quanh vết cắt bắt đầu đỏ lên và viêm. Đây là tín hiệu cho thấy hệ thống miễn dịch đã nhận được thông tin và đang gửi “quân lính” – là các tế bào miễn dịch đến khu vực bị thương để làm sạch và thúc đẩy quá trình làm lành. Nhưng các nhà khoa học cũng đã phát hiện ra một dạng viêm xảy ra ở mức độ toàn cơ thể, chứ không phải cục bộ như ví dụ ở trên. Loại phản ứng viêm này có thể xảy ra do nhiều yếu tố, chẳng hạn như một chế độ ăn kiêng chất béo bão hòa và ít chất xơ, hoặc phụ thuộc vào mức độ căng thẳng, hoặc có nhiều cơ quan trong cơ thể đang … “quá mập mạp” (nhiễm mỡ). Trạng thái viêm liên tục này ngược lại không mang đến hiệu quả chữa lành mà thay vào đó dẫn đến tăng tổn thương các tế bào và mô. Đây dường như là nguồn gốc của các bệnh mãn tính, và nó đang trở thành một vấn đề khá nghiêm trọng. Một trong những ví dụ về sự tai hại của việc viêm mãn tính này là một dạng tăng huyết áp nhẹ. Thông thường, trái tim đập 100,000 lần/ngày. Ở tỉ lệ này, chỉ cần tăng nhẹ huyết áp trong một thời gian dài cũng có thể gây ra những vấn đề “đau đầu”. Huyết áp cao sẽ làm hỏng lớp lót ở thành động mạch, và dĩ nhiên khi có sự tổn thương, quá trình viêm sẽ bắt đầu được kích hoạt với hy vọng nhanh chóng làm lành những vết thương này. Tuy nhiên, sự nỗ lực lại dẫn đến một kết quả khó lường, đó là tình trạng lớp nội mạc dày lên choáng đi những vị trí bị trống trong lòng mạch và làm động mạch bị thu hẹp lại.</Text>
          <Text style={{
            marginTop: 7,
            fontSize: 17,
            color: colors.text
          }}>Huyết áp cao cũng làm tăng nhanh sự tích tụ của chất béo trong động mạch (xơ vữa động mạch). Khi lớp lót động mạch bị tổn thương, tế bào máu và mỡ thường kết tụ lại tại vị trí chấn thương. Chúng xâm nhập và tạo thành “những vết sẹo” ở các lớp sâu hơn của thành động mạch – gọi là các mảng. Theo thời gian, các mảng này “trưởng thành” và lại tiếp tục giành những vị trí trống trong lòng mạch và làm thu hẹp động mạch. Và điều tất yếu, những cơ quan đang được nuôi dưỡng bởi những động mạch này bị “thiếu dinh dưỡng” do dòng máu đến không đầy đủ gây ra bởi lòng mạch đã bị thu hẹp. (Ở đây có thể hiểu như cơ chế của một ống nước, ống nào có đường kính lớn và ít bị tắc nghẽn thì sẽ cung cấp được nhiều nước hơn và ngược lại). Và khi những cơ quan này thấy rằng mình không được cung cấp đủ “thức ăn”, chúng sẽ báo cho trái tim của bạn biết, và để đáp ứng được nhu cầu của các cơ quan này, không còn cách nào khác, trái tim cần làm việc chăm chỉ hơn, đập nhanh hơn và phải tạo các áp lực lên động mạch để duy trì một lưu lượng máu đủ đầy để chăm sóc toàn bộ cơ thể. Đi cùng với việc áp lực trên các mạch máu tăng lên, thì tình trạng viêm cũng tiến triển mạnh mẽ hơn. Viêm nội mạc (lớp lớp của thành mạch máu) mãn tính là vấn đề hàng đầu trên toàn cầu bởi vì nó đang góp phần gây ra các cơn đau tim và đột quỵ hiện nay. Một ví dụ khác là tình trạng trào ngược axit dạ dày. Tất cả chúng ta đều có những loại axit “mạnh” trong dạ dày với nhiệm vụ tiêu hóa thức ăn và đảm bảo rằng không có loại vi khuẩn nào có thể xâm nhập vào ruột non. Đôi khi, axít này có thể đi ngược từ dạ dày lên phần dưới của thực quản và gây ra các cơn đau. Có lẽ nó cũng đã khá quen thuộc hiện nay, gọi là tình trạng trào ngược dạ dày thực quản (GERD). Khi axit chạm vào thực quản, nó sẽ làm tổn thương các tế bào ở đây, và như vậy, quá trình viêm lại bắt đầu. Phản ứng viêm này thường sẽ là tạm thời và kết thúc sau khi tình trạng này kết thúc và các mô thực quản cũng sẽ lành lại. Nhưng nếu các đợt trào ngược này cứ lặp đi lặp lại theo thời gian, như trong trường hợp bị GERD, có thể dẫn đến các vấn đề nghiêm trọng hơn như ung thư thực quản.</Text>
          <Text style={{
            marginTop: 7,
            fontSize: 22,
            color: colors.text,
            fontWeight: "bold"
          }}>Nguyên nhân của sự viêm mãn tính</Text>
          <Text style={{
            marginTop: 7,
            fontSize: 17,
            color: colors.text
          }}>Ngày càng có nhiều bằng chứng cho thấy rằng sự viêm mãn tính gắn liền với nhiều yếu tố xung quanh những thói quen sinh hoạt hàng ngày của chúng ta, bao gồm:</Text>
          <Icon
            name="dot-single"
            color={colors.text}
            size={30}
          />
          <Text style={{
            textAlign: "left",
            marginTop: -26,
            marginLeft: 25,
            fontSize: 17,
            color: colors.text,
          }}>Thiếu những hoạt động thể chất – Khi cơ và xương hoạt động trong quá trình vận động, chúng giải phóng các protein vào trong máu giúp giảm tình trạng viêm ở khắp cơ thể. Ngược lại, khi cơ bắp không hoạt động, dẫn đến sự gia tăng các “nguyên liệu” cho quá trình tiền viêm – những nguyên liệu này thường được tìm thấy ở những bệnh nhân sống sót sau ung thư vú, những người mắc bệnh tiểu đường và những người ít quan tâm đến sức khỏe của mình. Nhiều nghiên cứu đã cho thấy một mối quan hệ đối nghịch giữa viêm – hoạt động thể chất, nghĩa là bạn càng hoạt động nhiều, mức độ viêm nhiễm càng giảm.</Text>
          <Icon
            name="dot-single"
            color={colors.text}
            size={30}
          />
          <Text style={{
            textAlign: "left",
            marginTop: -26,
            marginLeft: 25,
            fontSize: 17,
            color: colors.text,
          }}>Chế độ ăn uống không lành mạnh – Chế độ ăn ít trái cây, rau, ngũ cốc nguyên cám và nhiều muối, rượu, chất béo chuyển hóa (trans fat) và các thực phẩm chế biến sẵn có thể thay đổi hệ vi sinh vật đường ruột. Hệ vi sinh vật đường ruột được tạo thành từ vi khuẩn, nấm, vi-rút và các sinh vật khác – thường cư ngụ ở hệ tiêu hóa của bạn. Mỗi một sự mất cân bằng trong hệ thống vi sinh vật này có thể dẫn đến tình trạng viêm.</Text>
          <Icon
            name="dot-single"
            color={colors.text}
            size={30}
          />
          <Text style={{
            textAlign: "left",
            marginTop: -26,
            marginLeft: 25,
            fontSize: 17,
            color: colors.text,
          }}>Béo phì – Cả chế độ ăn và việc ít tập luyện thể chất đều góp phần gây ra tình trạng béo phì, điều này cũng liên quan đến những thay đổi trong hệ vi sinh vật đường ruột và tình trạng viêm. Mỡ bụng (mỡ nội tạng) là một “ngòi nổ” cho phản ứng viêm xảy ra. Bản thân mô là một cơ quan hoạt động trong cơ thể và có cơ chế phân bào của riêng nó. Các quá trình này khởi phát chuỗi phản ứng hóa học nhất định dẫn đến sự lan truyền của các chất tiền viêm theo thời gian.</Text>
          <Icon
            name="dot-single"
            color={colors.text}
            size={30}
          />
          <Text style={{
            textAlign: "left",
            marginTop: -26,
            marginLeft: 25,
            fontSize: 17,
            color: colors.text,
          }}>Căng thẳng và rối loạn giấc ngủ - Tình trạng căng thẳng kéo dài có xu hướng phá vỡ những liên kết giữa việc sản xuất hormone và khả năng miễn dịch của cơ thể để điều hòa quá trình viêm. Giai đoạn căng thẳng càng kéo dài có thể làm tăng tình trạng viêm không hồi phục. Sự thiếu hụt kéo dài của một giấc ngủ chất lượng cũng có thể dẫn đến sự kích hoạt của các con đường dẫn đến viêm mãn tính. Một số tác động tức thời của việc không ngủ đủ giấc và căng thẳng quá mức là gì? Đáp ứng của chúng ta với vắc-xin giảm đáng kể khi chúng ta quá căng thẳng và không ngủ đủ. Khi những tình trạng này kết hợp với nhau, đáp ứng của hệ miễn dịch với vắc-xin sẽ “rất kém”.</Text>
          <Icon
            name="dot-single"
            color={colors.text}
            size={30}
          />
          <Text style={{
            textAlign: "left",
            marginTop: -26,
            marginLeft: 25,
            fontSize: 17,
            color: colors.text,
          }}>Ô nhiễm môi trường và chất thải công nghiệp – Với tốc độ mở rộng các thành phố và các lĩnh vực công nghiệp hiện đại, việc chúng ta phải tiếp xúc với các chất thải nguy hại và hóa chất công nghiệp đã tăng lên như phép lũy thừa. Hàng ngàn hóa chất tồn tại trên thế giới hiện nay, nhưng chỉ một số ít trong đó được đánh giá về ảnh hưởng của chúng đối với sức khỏe của con người. Trong số những hóa chất ít ỏi đó, một số thường xuyên được sử dụng và được đánh giá có liên quan đến các quá trình viêm trong cơ thể. Ngoài ra, có những bằng chứng rõ ràng rằng các chất gây ô nhiễm như khói thuốc lá có thể làm hỏng phổi và hệ hô hấp, dẫn đến ung thư phổi và bệnh phổi mãn tính. Hít trực tiếp khói thuốc lá có thể gây ra những hậu quả nghiêm trọng, không những vậy, những tác động tiêu cực của khói thuốc lá đọng lại trong không khí và bám trên các đồ nội thất cũng đã được ghi nhận.</Text>
          <Text style={{
            marginTop: 7,
            fontSize: 22,
            color: colors.text,
            fontWeight: "bold"
          }}>Những căn bệnh nào có khả năng xuất hiện khi chúng ta già đi?</Text>
          <Text style={{
            marginTop: 7,
            fontSize: 17,
            color: colors.text
          }}>Nhiều người khi bước vào độ tuổi 60 và 70, họ bắt đầu có những dấu hiệu của các bệnh liên quan đến lão hóa, chẳng hạn như sa sút trí tuệ và ung thư. Họ thường xuyên theo dõi các dấu hiệu của những căn bệnh đó, chẳng hạn như các cơn đau bất thường hoặc mất trí nhớ, và bắt đầu lo sợ rằng các dấu hiệu này đang “đuổi theo” mình. Đôi khi những bận tâm và mối lo ngại đối với những vấn đề sức khỏe như vậy làm họ bỏ bê các vấn đề khác cũng có thể xảy ra. Đúng là nguy cơ mất trí nhớ và một số bệnh ung thư thật sự tăng theo tuổi tác, nhưng những người được sinh ra trong thời kỳ “bùng nổ trẻ em – baby boomer” lại có nhiều khả năng xuất hiện các vấn đề về sức khỏe khác: bệnh tim mạch.</Text>
          <Text style={{
            marginTop: 7,
            fontSize: 22,
            color: colors.text,
            fontWeight: "bold"
          }}>Tại sao lại như thế?</Text>
          <Text style={{
            marginTop: 7,
            fontSize: 17,
            color: colors.text
          }}>So với những người có cùng tuổi thọ, thế hệ bùng nổ trẻ em có nhiều khả năng đưa ra các lựa chọn và có các yếu tố nguy cơ dẫn đến bệnh tim hơn so với thế hệ trước. Họ thiếu hoạt động thể chất một cách trầm trọng so với bố mẹ của mình. Họ cũng có mức cholesterol, đái tháo đường và tăng huyết áp cao hơn.</Text>
          <Text style={{
            marginTop: 7,
            fontSize: 17,
            color: colors.text
          }}>Các thay đổi phổ biến xảy ra theo độ tuổi cũng có thể làm tăng nguy cơ của các bệnh tim mạch. Ví dụ, động mạch ở những người lớn tuổi thường có khả năng bị cứng lại (xơ cứng động mạch), và các mảng bám tích tụ lâu năm có thể làm thành mạch bị thu hẹp (xơ vữa động mạch). Những thay đổi liên quan đến tuổi trong trái tim – kết hợp với các yếu tố như thừa cân, thiếu hoạt động thể chất và thậm chí là tăng huyết áp nhẹ, có thể dẫn đến tình trạng nhịp tim không đều (loạn nhịp), các van tim cứng lại và buồng tim thì dày lên. Kết quả là bệnh tim có thể ảnh hưởng đáng kể đến cuộc sống của mỗi người, làm hạn chế các hoạt động, phải can thiệp y khoa và giảm chất lượng cuộc sống của hàng triệu người mỗi năm. Và đây vẫn là nguyên nhân phổ biến nhất gây tử vong ở người lớn tuổi. Điều đó không có nghĩa là ung thư, sa sút trí tuệ và bệnh tiểu đường không phải là mối quan tâm ở người lớn tuổi. Ung thư theo sau bệnh tim là nguyên nhân tử vong đứng thứ hai ở người cao tuổi. Và tuổi tác là yếu tố nguy cơ quan trọng nhất. Gần 50% các trường hợp ung thư mới được tìm thấy ở những người trong độ tuổi từ 65 đến 84. Tỷ lệ sa sút trí tuệ, một tình trạng ảnh hưởng đến trí nhớ, suy nghĩ và kỹ năng xã hội cũng tăng dần theo tuổi tác. Và tỷ lệ này đang dần tăng lên cùng với sự kéo dài của tuổi thọ con người hiện nay.</Text>
          <Text style={{
            marginTop: 7,
            fontSize: 17,
            color: colors.text
          }}>Trên thực tế, một số nghiên cứu cho thấy rằng sa sút trí tuệ có thể ảnh hưởng đến hơn 150 triệu người trên thế giới vào năm 2050 – tăng từ mức 50 triệu người vào năm 2019. Nguy cơ mắc bệnh đái tháo đường tuýp 2, tình trạng cơ thể bị ảnh hưởng ở các cơ chế sử dụng đường trong máu và có thể dẫn đến nhiều biến chứng, cũng tăng theo tuổi. Và, như với tình trạng sa sút trí tuệ, đái tháo đường cũng đang gia tăng tỷ lệ mắc – phần lớn là do các yếu tố có thể kiểm soát được, chẳng hạn như không hoạt động, chế độ ăn uống nghèo nàn và béo phì. Nghiên cứu cho thấy vào năm 2050, đái tháo đường có thể ảnh hưởng đến khoảng một phần ba người lớn ở Hoa Kỳ, và tôi hoàn toàn chắc chắn về khả năng xảy ra của nó. Hơn một phần ba người Mỹ trưởng thành, tức là khoảng 90 triệu người bị tiền đái tháo đường, những chỉ có 10% biết về điều đó. Và bạn có thể chưa biết, bạn không thể “sửa chữa” được nếu nó xảy ra.</Text>
          <Text style={{
            marginTop: 7,
            fontSize: 17,
            color: colors.text
          }}>Tất cả những bệnh có thể xuất hiện khi chúng ta già đi – bệnh tim mạch, ung thư, sa sút trí tuệ, đái tháo đường và những bệnh khác nữa – đều đáng được chúng ta chú ý đến. Và, quan trọng hơn hết, là hành động của chúng ta để ngăn ngừa và làm chậm sự tiến triển của chúng là gì?</Text>
          <Text style={{
            marginTop: 7,
            fontSize: 22,
            color: colors.text,
            fontWeight: "bold"
          }}>Cơ thể chúng ta cũng giống như ô tô</Text>
          <Text style={{
            marginTop: 7,
            fontSize: 17,
            color: colors.text
          }}>Cách chúng ta chăm sóc cơ thể mình cũng giống như cách bảo dưỡng một chiếc ô tô. Chúng ta cần phải dành sự chú ý và lựa chọn thật tốt để tránh những vấn đề có thể xảy ra. Ví dụ, nếu bạn liên tục gặp phải ổ gà, dẫn đến xe bị xẹp lốp hoặc bánh xe bị trật ra khỏi vị trí ban đầu. Lái xe với lượng dầu ít ỏi hoặc dầu bẩn có thể dẫn đến hư hỏng động cơ.</Text>
          <Text style={{
            marginTop: 7,
            fontSize: 17,
            color: colors.text
          }}>Cơ thể của chúng ta cũng tương tự như vậy. Thường xuyên tiêu thụ những thực phẩm có khả năng gây tình trạng viêm và gây hại cho cơ thể. Hoặc khi ta vận động quá sức mà không cho cơ thể thời gian để hồi phục. Để giữ cho cơ thể và trí óc hoạt động tốt trong thời gian dài, điều quan trọng là chúng ta phải đầu tư vào việc “bảo dưỡng” hàng ngày.</Text>
          <Icon
            name="dot-single"
            color={colors.text}
            size={30}
          />
          <Text style={{
            textAlign: "left",
            marginTop: -26,
            marginLeft: 25,
            fontSize: 17,
            color: colors.text,
          }}>Pin = Giấc ngủ. Hãy sạc lại năng lượng cho cơ thể bằng những giấc ngủ chất lượng.</Text>
          <Icon
            name="dot-single"
            color={colors.text}
            size={30}
          />
          <Text style={{
            textAlign: "left",
            marginTop: -26,
            marginLeft: 25,
            fontSize: 17,
            color: colors.text,
          }}>Lọc khí = Khói thuốc. Tránh xa các chất gây ô nhiễm như thuốc lá để tránh làm hỏng các “động cơ” trong cơ thể.</Text>
          <Icon
            name="dot-single"
            color={colors.text}
            size={30}
          />
          <Text style={{
            textAlign: "left",
            marginTop: -26,
            marginLeft: 25,
            fontSize: 17,
            color: colors.text,
          }}>Động cơ = Tập luyện. Bạn sử dụng xe thường xuyên để động cơ hoạt động tốt. Tương tự đối với việc chúng ta thường xuyên vận động cơ thể.</Text>
          <Icon
            name="dot-single"
            color={colors.text}
            size={30}
          />
          <Text style={{
            textAlign: "left",
            marginTop: -26,
            marginLeft: 25,
            fontSize: 17,
            color: colors.text,
          }}>Trọng lượng = Cân nặng. Việc chiếc xe cũng như cơ thể phải “gánh vác” quá nhiều trọng lượng khiến chúng phải làm việc quá sức và gây ra căng thẳng cho các bộ phận khác.</Text>
          <Icon
            name="dot-single"
            color={colors.text}
            size={30}
          />
          <Text style={{
            textAlign: "left",
            marginTop: -26,
            marginLeft: 25,
            fontSize: 17,
            color: colors.text,
          }}>Xăng dầu = Dinh dưỡng. Cung cấp cho cơ thể nguồn nhiên liệu phù hợp. Hiển nhiên, bạn không thể sử dụng dầu cho các động cơ được thiết kế để chạy bằng xăng.</Text>
          <Icon
            name="dot-single"
            color={colors.text}
            size={30}
          />
          <Text style={{
            textAlign: "left",
            marginTop: -26,
            marginLeft: 25,
            fontSize: 17,
            color: colors.text,
          }}>Phanh = Chất cồn. Hãy hãm lại lượng cồn đưa vào cơ thể và biết khi nào nên dừng lại.</Text>
          <Icon
            name="dot-single"
            color={colors.text}
            size={30}
          />
          <Text style={{
            textAlign: "left",
            marginTop: -26,
            marginLeft: 25,
            fontSize: 17,
            color: colors.text,
          }}>Xóc/lốp = Căng thẳng. Trong cuộc đời này chẳng có con đường nào không có ổ gà. Bạn cần giảm xóc để đối phó với những căng thẳng mà cuộc sống mang tới. Bạn cũng sẽ cần đến sự hỗ trợ từ xã hội – như chiếc lốp xe vậy – để tạo ra sự cân bằng nhằm vận hành trơn tru hơn.</Text>
          <Text style={{ marginTop: 20, fontSize: 17, color: colors.text }}>Nguồn tài liệu: Mayo Clinic</Text>
          <Text style={{ marginTop: 15, fontSize: 17, color: colors.text }}>Biên dịch: DS. Nguyễn Phạm Quỳnh Hoa</Text>
        </View>
      </ScrollView>
    </View>
  )
}
