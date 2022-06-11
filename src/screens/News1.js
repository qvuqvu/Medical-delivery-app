import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image,ScrollView} from "react-native";
import { colors } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo"
import Header from "../components/Header";

export default function News1({navigation}) {
  return (
    <View>
      <ScrollView>
      <Header title="Bài viết" type="arrow-left" navigation={navigation}/>
      <View style={{marginTop:5}}>
        <Text style={{fontSize:27,color:colors.black,fontWeight:"bold"}}>Tổng quan về đề kháng kháng sinh</Text>
      </View>
      <View>
        <Text style={{marginTop:10,color:colors.black,fontSize:17}}>Những thông tin dưới đây được dịch từ các bài viết của Trung tâm Kiểm soát và Phòng ngừa Bệnh tật Hoa Kỳ (CDC – Centers for Disease Control and Prevention). Đây là tổ chức ra đời với nhiệm vụ thực hiện các công tác y tế cộng đồng, phát triển và ứng dụng hệ thống để phòng ngừa và kiểm soát bệnh tật, đặc biệt là các bệnh truyền nhiễm. Các thông tin được tổ chức này sử dụng có độ tin cậy, chính xác và cơ sở y học cao, do đó có giá trị tham khảo cao trong lĩnh vực sức khỏe, đặc biệt các vấn đề liên quan đến bệnh truyền nhiễm.</Text>
        <Text style={{marginTop:7,fontSize:17,color:colors.black}}>Đề kháng kháng sinh là một trong những thách thức về sức khỏe cộng đồng trong thời điểm mà có quá ít những lựa chọn sẵn có cho những người đang bị nhiễm những loại vi khuẩn đề kháng với kháng sinh.</Text>
      </View>
      <View>
        <Text style={styles.title1}>Vi Khuẩn là gì ?</Text>
        <Text style={{marginTop:7,fontSize:17,color:colors.black}}>Vi khuẩn và nấm là các hệ vi sinh vật được tìm thấy bên trong và ngoài cơ thể. Hầu hết các loại vi sinh vật đều có hại, một vài loại có thể hữu ích cho con người, ngược lại những loại khác có thể gây ra các tình trạng nhiễm trùng, như viêm họng hoặc nhiễm trùng đường tiểu.</Text>
        <Image
        source={{uri:"https://www.medigoapp.com/uploads/vi_khuan_26a90c7809.jpg"}}
        style={{width:400,height:300,marginTop:10}}
        />
        <Text style={styles.title1}>Kháng sinh là gì</Text>
        <Text style={{marginTop:7,fontSize:17,color:colors.black}}>
        Kháng sinh là những công cụ quan trọng trong việc phòng ngừa và điều trị nhiễm trùng gây ra bởi những vi khuẩn đặc trưng ở người, động vật, và mùa vụ. Ở các trung tâm chăm sóc sức khỏe, kháng sinh là một trong những thuốc có “sức mạnh” lớn nhất trong việc “chiến đấu” với tình trạng nhiễm khuẩn đe dọa đến tính mạng.
        </Text>
        <Text style={styles.title1}>Đề kháng kháng sinh là gì ?</Text>
        <Text style={styles.title3}>Đề kháng kháng sinh xảy ra khi vi sinh vật không còn đáp ứng với các loại kháng sinh được thiết kế để tiêu diệt chúng. Điều đó có nghĩa rằng các loại vi sinh vật này không bị giết, ngược lại chúng tiếp tục phát triển và sinh sản. Khái niệm này hoàn toàn khác biệt với việc cơ thể của bạn bị đề kháng với kháng sinh.</Text>
        <Text style={styles.title3}>Vi khuẩn và nấm liên tục tìm ra những phương pháp mới để tránh những tác động của kháng sinh để điều trị những bệnh nhiễm khuẩn do chúng gây ra.</Text>
        <Text style={styles.title3}>Các bệnh nhiễm trùng gây ra bởi các vi sinh vật kháng thuốc thường khó, hoặc đôi khi không thể điều trị được. Trong một vài trường hợp, các bệnh nhiễm trùng có đề kháng kháng sinh bắt buộc phải điều trị dài ngày tại bệnh viện, phải tái khám thường xuyên, cũng như phải lựa chọn những phương pháp đắt đỏ và độc hại hơn để thay thế.</Text>
        <Image
        source={{uri:"https://www.medigoapp.com/uploads/de_khang_khang_sinh_la_gi_3474783fad.png"}}
        style={{width:400,height:300,marginTop:10}}
        />
        <Text style={styles.title3}>Vi khuẩn và nấm không nhất thiết phải kháng với tất cả các loại kháng sinh mới trở thành một vấn đề nguy hiểm. Đề kháng với dù chỉ một loại kháng sinh cũng có thể đồng nghĩa với các vấn đề nghiêm trọng. Ví dụ:</Text>
        <Icon
         color={colors.black}
        name="dot-single"
        size={30}
        />
        <Text style={styles.title2}>Các bệnh nhiễm trùng gây ra bởi các loại vi sinh vật kháng kháng sinh yêu cầu phải có các phương pháp điều trị thứ hai thứ ba, và có thể gây hại cho bệnh nhân do gây ra các tác dụng phụ nghiêm trọng, chẳng hạn như suy các cơ quan, phải kéo dài thời gian chăm sóc và phục hồi, đôi khi việc này có thể kéo dài nhiều tháng.</Text>
        <Icon
         color={colors.black}
        name="dot-single"
        size={30}
        />
        <Text style={styles.title2}>Nhiều tiến bộ y học hiện tại như thay khớp, cấy ghép nội tạng, liệu pháp điều trị ung thư, và điều trị các bệnh mạn tính như tiểu đường, hen suyễn và viêm khớp dạng thấp phụ thuộc vào khả năng chống nhiễm trùng của kháng sinh.</Text>
        <Icon
         color={colors.black}
        name="dot-single"
        size={30}
        />
        <Text style={styles.title2}>Nếu các kháng sinh hiện tại mất tác dụng, chúng ta cùng lúc sẽ mất khả năng điều trị các bệnh truyền nhiễm và không thể kiểm soát các mối đe dọa cho sức khỏe cộng động.</Text>
        <Text style={styles.title1}>Tình trạng đề kháng kháng sinh diễn ra như thế nào?</Text>
        <Text style={styles.title3}>Để sống sót trước những đợt tấn công của kháng sinh, vi sinh vật cần phát triển các “chiến lược phòng thủ” để chống lại kháng sinh, cái mà chúng ta hay gọi là cơ chế kháng thuốc. DNA quy định các cơ chế kháng thuốc sẽ đưa ra các “mệnh lệnh” để vi sinh vật tiến hành tạo ra các protein cụ thể. Vi khuẩn và nấm có thể mang gen quy định các cơ chế kháng thuốc khác nhau.</Text>
        <Text style={styles.title3}>Khi các loại vi sinh vật vốn đã khó để tiêu diệt từ trước, lại có sự kết hợp của các cơ chế kháng thuốc, các kháng sinh dường như mất tác dụng trên các vi sinh vật này, dẫn đến tình trạng nhiễm trùng không thể điều trị. Và điều đáng báo động là sự kháng thuốc này có thể lây lan do các cơ chế đặc thù của vi sinh vật. Tức là một vi sinh vật chưa biết gì về đề kháng kháng sinh có thể “tiếp thu” từ các vi sinh vật khác đã có các cơ chế đề kháng với kháng sinh trước đó.</Text>
        <Text style={styles.title3}>Dưới đây là một số ví dụ về cách vi sinh vật đã tạo ra các “chiến lược phòng thủ” để chống lại các đợt tấn công của kháng sinh.</Text>
        <Image
        source={{uri:"https://www.medigoapp.com/uploads/hinh_de_khang_khang_sinh_e3838ba74c.jpg"}}
        style={{width:390,height:350,marginTop:10}}
        />
        <Text style={styles.title1}>Việc dùng các kháng sinh đã góp phần ảnh hưởng vào tình trạng đề kháng kháng sinh như thế nào?</Text>
        <Text style={styles.title3}>Bất cứ khi nào kháng sinh được sử dụng, chúng đều có thể góp phần vào tình trạng đề kháng kháng sinh do việc tạo áp lực lên vi khuẩn và nấm khiến chúng phải tiến hành sự thích nghi. Điều này là do sự gia tăng tình trạng kháng kháng sinh được thúc đẩy bởi sự tiếp xúc của các vi sinh vật và các kháng sinh, sự lây lan cơ chế đề kháng kháng sinh giữ các vi sinh vật này với nhau. Khi cần dùng kháng sinh, lợi ích mà nó mang lại thường lớn hơn nhiều so với nguy cơ đề kháng. Tuy nhiên, hiện tại có quá nhiều kháng sinh đang bị lạm dụng và được sử dụng trong những trường hợp không cần thiết. Điều này vô tình đe dọa đến tính hữu dụng của nhóm thuốc có vai trò rất quan trọng này.</Text>
        <Text style={styles.title3}>Các kháng sinh và kháng nấm tiêu diệt một số vi sinh vật gây ra tình trạng nhiễm trùng, mặt khác, chúng cũng đồng thời tiêu diệt các vi sinh vật có lợi bảo vệ cơ thể khỏi việc nhiễm trùng. Các vi sinh vật kháng thuốc tồn tại và sinh sôi, chúng có các đặc điểm kháng kháng sinh trong DNA để lây sang những vi sinh vật khác.</Text>
        <Text style={styles.title3}>Mọi người đều có vai trò trong việc cải thiện tình trạng sử dụng kháng sinh. Sử dụng kháng sinh phù hợp có lợi trong việc ngăn chặn tình trạng kháng kháng sinh và đảm bảo nhóm thuốc quan trọng này sẽ vẫn có thể tiếp tục sử dụng được cho các thế hệ tương lai.</Text>
        <Image
        source={{uri:"https://www.medigoapp.com/uploads/de_khang_khang_sinh_f4129c1949.jpg"}}
        style={{width:400,height:300,marginTop:10}}
        />
        <Text style={styles.title1}>Tại sao bạn cần phải quan tâm đến vấn đề đề kháng kháng sinh?</Text>
        <Text style={styles.title3}>Đề kháng kháng sinh có thể ảnh hưởng đến bất kỳ người nào, ở bất kỳ giai đoạn nào của cuộc đời. Những người được chăm sóc sức khỏe hoặc người có hệ miễn dịch suy yếu thường có nguy cơ bị nhiễm trùng cao hơn.</Text>
        <Text style={styles.title3}>Tình trạng đề kháng kháng sinh sẽ làm ảnh hưởng đến các tiến bộ trong việc chăm sóc sức khỏe hiện đại mà chúng ta đang phải phụ thuộc vào chúng, chẳng hạn như thay khớp, cấy ghép nội tạng hay điều trị ung thư. Các thủ thuật này có nguy cơ gây ra tình trạng nhiễm trùng cao, và bệnh nhân sẽ không thể được điều trị nếu không có sẵn các thuốc kháng sinh hiệu quả để dự phòng trong những tình huống này.</Text>
        <Text style={styles.title3}>Hơn thế, việc đề kháng kháng sinh quá nhanh đang làm “nản lỏng” các công ty dược phẩm. Chi phí để nghiên cứu ra một kháng sinh mới là quá đắt đỏ, tuy nhiên việc sử dụng chỉ kéo dài được vài năm do tình hình đề kháng. Nếu tình trạng này cứ tiếp diễn, đến một lúc nào đó, các bệnh truyền nhiễm sẽ lại là “cơn ác mộng” đối với sức khỏe cộng đồng, như cách nó đã làm vào những năm trước khi kháng sinh được phát hiện.</Text>
        <Text style={styles.title3}>Bên cạnh việc chăm sóc sức khỏe, tình trạng kháng kháng sinh cũng ảnh hưởng đến thú y và nông nghiệp.</Text>
        <Image
        source={{uri:"https://www.medigoapp.com/uploads/de_khang_khang_sinh_1_5f60ac2563.jpg"}}
        style={{width:360,height:300}}
        />
        <Text style={styles.title1}>Chúng ta có thể làm gì để bảo vệ bản thân và gia đình khỏi tình trạng đề kháng kháng sinh?</Text>
        <Text style={styles.title3}>Hãy bảo vệ bản thân bạn và gia đình khỏi việc gặp phải tình trạng đề kháng kháng sinh bằng cách:</Text>
        <Icon
         color={colors.black}
        name="dot-single"
        size={30}
        />
        <Text style={styles.title2}>Cố gắng hết sức để giữ gìn sức khỏe của bạn và những người khác</Text>
        <Icon
         color={colors.black}
        name="dot-single"
        size={30}
        />
        <Text style={styles.title2}>Rửa sạch tay</Text>
        <Icon
         color={colors.black}
        name="dot-single"
        size={30}
        />
         <Text style={styles.title2}>Che chắn khi ho</Text>
         <Icon
          color={colors.black}
        name="dot-single"
        size={30}
        />
         <Text style={styles.title2}>Ở nhà khi bị ốm</Text>
         <Icon
         color={colors.black}
        name="dot-single"
        size={30}
        />
         <Text style={styles.title2}>Tiêm vắc-xin khi được khuyến cáo, chẳng hạn như vắc-xin cúm</Text>
         <Text style={styles.title3}>Chỉ sử dụng kháng sinh khi thực sự cần thiết là một cách quan trọng để ngăn chặn tình trạng đề kháng kháng sinh. Hãy thảo luận với bác sĩ về những phương pháp điều trị tốt nhất khi bạn bị ốm. Và đừng bao giờ bắt buộc bác sĩ phải kê kháng sinh cho mình.</Text>
         <Text style={styles.title3}>Khi việc sử dụng kháng sinh là không cần thiết, chúng không mang lại lợi ích cho bạn, ngược lại chúng có thể gây hại do các tác dụng phụ sẵn có. Hãy hỏi bác sĩ hoặc dược sĩ về các bước bạn cần phải thực hiện để cải thiện tình trạng sức khỏe khi việc sử dụng kháng sinh là không cần thiết.</Text>
         <Text style={styles.title3}>Nếu bác sĩ của bạn quyết định sử dụng kháng sinh như là một phương pháp điều trị tốt nhất cho tình trạng hiện tại của bạn:</Text>
         <Icon
         color={colors.black}
        name="dot-single"
        size={30}
        />
        <Text style={styles.title2}>Hãy sử dụng kháng sinh một cách chính xác theo những gì bác sĩ đã căn dặn.</Text>
        <Icon
         color={colors.black}
        name="dot-single"
        size={30}
        />
        <Text style={styles.title2}>Không đưa thuốc của bạn để người khác sử dụng.</Text>
        <Icon
         color={colors.black}
        name="dot-single"
        size={30}
        />
        <Text style={styles.title2}>Không để dành thuốc cho những lần dùng sau.</Text>
        <Icon
         color={colors.black}
        name="dot-single"
        size={30}
        />
        <Text style={styles.title2}>Không dùng các kháng sinh được kê đơn cho người khác. Điều này có thể làm trì hoãn quá trình điều trị tốt nhất cho bạn, khiến tình trạng của bạn trở nên tệ hơn hoặc gây ra các tác dụng phụ.</Text>
        <Text style={styles.title3}>Suy cho cùng, đề kháng kháng sinh không phải là vấn đề của riêng ai. Đây không phải là vấn đề gây ra bởi một người, đồng thời cũng không thể được giải quyết bởi một người. Do vậy, việc chung tay góp sức để tình trạng này diễn tiến chậm lại bằng cách sử dụng kháng sinh một cách hợp lý hơn là cách để chúng ta bảo vệ chính mình, cũng như các thế hệ tương lai.</Text>
        <Text style={{marginTop:20,fontSize:17,color:colors.black}}>Nguồn: cdc.gov</Text>
        <Text style={{marginTop:15,fontSize:17,color:colors.black}}>Biên dịch: DS. Nguyễn Phạm Quỳnh Hoa</Text>
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
  }
})