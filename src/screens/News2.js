import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from "react-native";
import {colors} from "react-native-elements"
import Header from "../components/Header";
export default function News2({navigation}) {
  return (
    <View>
        <ScrollView>
        <Header title="Bài viết" type="arrow-left" navigation={navigation}/>
            <View style={{margintop:10}}>
                <Text style={{fontSize:27,color:colors.black,fontWeight:"bold"}}>Bài báo cáo đặc biệt phần 3: 6 bước để sống lành mạnh mỗi ngày</Text>
                <Text style={styles.title3}>Những lựa chọn hằng ngày mà chúng ta đưa ra có thể dẫn đến việc chúng ta có khả năng mắc các bệnh mãn tính và phải gánh chịu các căn bệnh theo thời gian, vì vậy những lựa chọn này cũng có thể là một con đường để chúng ta quay về với một sức khỏe tốt.</Text>
                <Image
                source={{uri:"https://www.medigoapp.com/uploads/6_buoc_de_song_lanh_manh_820c9b5fc4.jpg"}}
                style={{width:540,height:300,marginTop:10}}
                />
                <Text style={styles.title3}>Dưới đây là sáu bước quan trọng trong việc “chiến đấu” với phản ứng viêm mãn tính và sống một cuộc sống khỏe mạnh và lâu dài. Những bước này có thể được thực hiện ở mọi lứa tuổi, bất cứ lúc nào. Có lẽ bạn đã nghe thấy chúng trước đây, không nghi ngờ gì về những điều này, nhung đã đến lúc chúng ta ngừng nghe mà bắt tay vào việc đưa chúng vào cuộc sống của mình – từng bước một. Hãy nhớ rằng việc thay đổi một lối sống tích cực không bao giờ là quá muộn, cũng không bao giờ là quá thừa.</Text>
                <Text style={styles.title1}>6 bước để sống lành mạnh mỗi ngày</Text>
                <Text style={styles.title1}>Bước 1: Thay đổi chế độ ăn uống của bạn</Text>
                <Text style={styles.title3}>Chế độ ăn Địa Trung Hải – đây là một trong những chế độ ăn đã được chứng minh là đem lại rất nhiều lợi ích cho sức khỏe. Chế độ ăn này tập trung vào các loại trái cây, rau và các loại hạt, ngũ cốc nguyên cám, dầu tốt cho sức khỏe và cá – chế độ ăn cung cấp chất dinh dưỡng cho cả sức khỏe thể chất và tinh thần. Ăn nhiều hơn các thực phẩm chưa qua chế biến, hạn chế các thực phẩm đóng gói sẵn. Một thống kê đã cho thấy 56% lượng calo tiêu thụ ở Hoa Kỳ đều đến từ thực phẩm chế biến sẫn. Tiêu thụ một lượng thức ăn vừa phải. Ngồi xuống và ăn một bữa ăn thong thả với gia đình và bạn bè là điều bạn nên làm.</Text>
                <Image
                source={{uri:"https://www.medigoapp.com/uploads/dinh_duong_ec954f37c8.jpg"}}
                style={{width:400,height:300,marginTop:10}}
                />
                <Text style={styles.title1}>Bước 2: Vận động và trở nên “cân đối”</Text>
                <Text style={styles.title3}>Cân nhắc các đồ ăn nhẹ trước buổi tập. Các nghiên cứu cho thấy rằng những bài tập cường độ cao (thường xuyên được gọi là bài tập cường độ cao ngắt quãng hoặc HIIT) có thể làm tăng cường thể lực cũng như kéo dài thời gian các đợt tập với cường độ vừa phải. Bạn có thể thực hiện các hoạt động rèn luyện khác nhau dựa theo hình thức này. Ví dụ luân phiên giữa đi bộ và đi bộ với tốc độ cao hơn. Bơi nhanh, sau đó giảm tốc độ và bơi nhanh trở lại.</Text>
                <Image
                source={{uri:"https://www.medigoapp.com/uploads/van_dong_5ec3eb8ece.jpg"}}
                style={{width:400,height:300,marginTop:10}}
                />
                <Text style={styles.title1}>Bước 3: Ưu tiên cho một giấc ngủ chất lượng</Text>
                <Text style={styles.title3}>Giấc ngủ mang lại cho cơ thể một thời gian nghỉ để hồi phục sau các hoạt động đã thực hiện trong ngày. Điều này cho phép các tế bào loại bỏ các chất thải, tiến hành sửa chữa và tạo ra các tế bào mới. Mất ngủ trong một thời gian dài đang lấy đi khả năng tự chữa trị của cơ thể bạn.</Text>
                <Text style={styles.title3}>Những người có giấc ngủ chất lượng thường có sức khỏe tốt hơn so với những người có giấc ngủ kém. Ở những người thường xuyên đi ngủ và thức dậy vào cùng một thời điểm mỗi ngày, cần ít hơn 15 phút để đi vào giấc ngủ, và thời gian bị thức giấc trong suốt một đêm thường ít hơn 15 phút trong hầu hết các ngày trong tuần.</Text>
                <Image
                source={{uri:"https://www.medigoapp.com/uploads/giac_ngu_ec954f37c8.jpg"}}
                style={{width:400,height:300,marginTop:10}}
                />
                <Text style={styles.title1}>Bước 4: Giải quyết những căng thẳng</Text>
                <Text style={styles.title3}>Căng thẳng kéo dài dẫn đến việc kích hoạt các chuỗi phản ứng trong cơ thể. Kết quả là cơ thể nằm trong tình trạng bị quá tải cortisol và các hormone căng thẳng khác, dẫn đến việc gián đoạn hầu hết tất cả các quá trình của cơ thể, cũng như thúc đẩy phản ứng viêm mãn tính. Điều này có thể đặt bạn trong các nguy cơ về các vấn đề sức khỏe và những thói quen không lành mạnh ảnh hưởng đến chất lượng cuộc sống và tuổi thọ. Một trong những cách đóng vai trò quan trọng nhất để đối mặt với căng thẳng là phải có những kết nối có ý nghĩa với những người quan trọng trong cuộc sống của bạn.</Text>
                <Text style={styles.title1}>Bước 5: Tránh thuốc lá và các chất độc hại khác</Text>
                <Text style={styles.title3}>Hiện nay, có lẽ mọi người đều biết rằng hút thuốc lá là nguyên nhân hàng đầu gây ung thư, vì vậy hút thuốc lá thể hiện sự thiếu trách nhiệm của bạn đối với sức khỏe của mình. Khói thuốc tồn tại trong không khí và bám lên nội thất cũng có thể ảnh hưởng đến sức khỏe của những người sống trong môi trường đó. Tuy việc cai thuốc lá chưa bao giờ là điều dễ dàng, nhưng lợi ích mà điều này mang lại là bao la. Có nhiều phương pháp có thể thực hiện để cai thuốc, bao gồm các loại thuốc, tư vấn từ chuyên gia và một số lựa chọn khác. Hãy tìm ra sự kết hợp mà bạn cảm thấy phù hợp nhất với bản thân mình.</Text>
                <Image
                source={{uri:"https://www.medigoapp.com/uploads/tranh_xa_cac_chat_doc_hai_5edeb32856.jpg"}}
                style={{width:400,height:300,marginTop:10}}
                />
                <Text style={styles.title1}>Bước 6: Hãy cân nhắc về việc sử dụng các chất cồn</Text>
                <Text style={styles.title3}>Hầu hết các nghiên cứu cho thấy rằng việc sử dụng các chất cồn với lượng từ ít đến trung bình có thể bảo vệ cơ thể chống lại các bệnh về mạch vành. Nhưng quá nhiều cồn có thể làm tăng các nguy cơ mắc bệnh tim mạch cũng như những bệnh khác, và giảm tuổi thọ. Nếu các chất cồn là một phần trong chế độ ăn uống của bạn, hãy lưu ý về vấn đề nên dùng khi nào và nên dùng như thế nào. Một lời khuyên cho bạn là hãy sử dụng xen kẽ thức uống có cồn và không cồn, chẳng hạn như nước khoáng có ga, và sử dụng chung trong một ly nước. Điều này có thể giúp ích trong việc cắt giảm lượng rượu bạn tiêu thụ.</Text>
                <Image
                source={{uri:"https://www.medigoapp.com/uploads/can_nhac_khi_uong_cac_chat_co_con_fe83431ffb.jpg"}}
                style={{width:400,height:300,marginTop:10}}
                />
                <Text style={styles.title1}>Năng lượng đến từ các mục tiêu</Text>
                <Text style={styles.title3}>Để có thể thực hiện sáu bước đã nêu trên, việc bạn tự tìm ra cho mình một lý do để hướng đến một cuộc sống khỏe mạnh hơn rất quan trọng.</Text>
                <Text style={styles.title3}>Đối với rất nhiều người, nghỉ hưu là một phần thưởng sau nhiều năm làm việc chăm chỉ. Bạn mong muốn một cuộc sống để mình có thể thoải mái thực hiện những sở thích của mìn, đi du lịch, đánh gôn và dành nhiều thời gian hơn cho gia đình và bạn bè. Nhưng khi thật sự đã ở độ tuổi được nghỉ hưu, đột nhiên bạn nhận ra rằng bạn đang đối mặt với những năm tháng này nhanh hơn sự tưởng tượng của mình. Nhanh đến mức khiến bạn chợt nghĩ rằng:” Ngay bây giờ sao?”. Bạn có thể gặp khó khăn để làm nổi bật mình khi gặp những vấn đề ngoài nghề nghiệp của mình. Bạn có thể bị lỡ mất những ngày làm việc bình thường và những mối quan hệ xã hội mà nó mang lại. Bạn có thể lo lắng rằng khi bạn bỏ lại nghề nghiệp của mình đồng nghĩa với việc bạn sống không có mục đích và ý nghĩa.</Text>
                <Image
                source={{uri:"https://www.medigoapp.com/uploads/khoe_manh_42b069bd46.jpg"}}
                style={{width:400,height:300,marginTop:10}}
                />
                <Text style={styles.title3}>Đây là những cảm xúc hết sức phổ biến. Nhưng khi nói về cha tôi, một bác sĩ qua đời ở tuổi 91 – hai tuần sau khi ông gặp bệnh nhân cuối cùng của mình – đã luôn nhắc nhở tôi rằng: “Hãy nghỉ hưu vì con muốn làm một điều gì đó, chứ không phải do những điều gì khác”.</Text>
                <Text style={styles.title1}>Những thói quen lành mạnh giúp tăng cường hệ miễn dịch</Text>
                <Text style={styles.title4}>Ăn uống lành mạnh</Text>
                <Text style={styles.title3}>Ăn nhiều trái cây và rau củ để cung cấp những chất chống oxy hóa và kháng viêm – hỗ trợ hệ thống miễn dịch chống lại việc nhiễm trùng.</Text>
                <Text style={styles.title4}>Luyện tập</Text>
                <Text style={styles.title3}>Những bài tập với cường độ vừa phải một cách thường xuyên sẽ làm tăng hoạt động tiêu diệt vi-rút của tế bào miễn dịch.</Text>
                <Text style={styles.title4}>Kiểm soát sự căng thẳng và tạo ra những sự liên kết trong xã hội</Text>
                <Text style={styles.title3}>Những hoạt động để làm cơ thể trở nên bình tĩnh cũng như các mối quan hệ hỗ trợ sẽ làm giảm căng thẳng, cắt giảm sự sản xuất cortisol và tăng cường chức năng miễn dịch.</Text>
                <Text style={styles.title4}>Ngủ đủ</Text>
                <Text style={styles.title3}>Một giấc ngủ chất lượng sẽ tăng cường số lượng các tế bào miễn dịch trong cơ thể và cải thiện tình trạng nhiễm trùng.</Text>
            </View>
        </ScrollView>
    </View>
)}
const styles=StyleSheet.create({
    title1:{
      marginTop:7,
      fontSize:22,
      color:colors.black,
      fontWeight:"bold"
    },
    title2:{
      textAlign:"left",
      marginTop:-26,
      marginLeft:25,
      fontSize:17,
      color:colors.black,
    },
    title3:{
    marginTop:7,
    fontSize:17,
    color:colors.black
    },
    title4:{
        marginTop:10,
        fontSize:18,
        color:colors.black,
        fontWeight:"bold"
    }
  })