import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from "react-native";
import {colors} from "react-native-elements"
import Header from "../components/Header";
import Icon from "react-native-vector-icons/Entypo"

export default function News4({navigation}) {
  return (
      <View>
          <ScrollView>
          <Header title="Bài viết" type="arrow-left" navigation={navigation}/>
          <View>
              <Text style={{fontSize:27,color:colors.black,fontWeight:"bold"}}>Bài báo cáo đặc biệt phần 4: Làm thế nào để kiên trì với lối sống lành mạnh?</Text>
              <Text style={styles.title3}>Người Mỹ tốn rất nhiều tiền và mất nhiều thời gian để điều trị các bệnh mãn tính. Nhưng tại sao chúng ta không ngăn chặn bệnh tật ngay từ cánh cửa đầu tiên? Liệu điều đó có làm chúng ta có một cuộc sống tốt hơn và tiếp tục duy trì nó trong suốt cuộc đời mình?</Text>
              <Image
                  source={{uri:"https://www.medigoapp.com/uploads/Lam_the_nao_de_kien_tri_voi_loi_song_lanh_manh_de4160f6ac.jpg"}}
                  style={{width:540,height:300,marginTop:10}}
                  />
              <Text style={styles.title1}>Sự thay đổi chậm rãi là sự thay đổi lâu dài</Text>
              <Text style={styles.title3}>Điều đó sẽ thật sự tuyệt vời nếu tất cả chúng ta có thể tạo ra những sự thay đổi trong lối sống với sự kiên trì và quyết tâm đảo ngược công tắc đã định sẵn. Nhưng chúng tôi cũng phải thừa nhận rằng – kỳ vọng này là bất hợp lý. Điều này tệ hơn nữa đã làm chúng ta thất vọng và làm mọi người có nghĩ suy nghĩ tiêu cực về khả năng thay đổi.</Text>
              <Text style={styles.title3}>Khi chúng ta đặt ra những mục tiêu quá lớn so với những điều chúng ta cần trong thời điểm hiện tại, một sự thay đổi đột ngột và quyết liệt – một chế độ ăn kiêng khắc khổ, một kế hoạch tập luyện cường độ cao hoặc một chương trình thức-ngủ được cài đặt nghiêm ngặt – chúng ta chỉ có thể thực hiện nó trong một thời gian ngắn. Những hành động như vậy thường không thể trở thành những thói quen lâu dài. Trong một vài khoảnh khắc, bạn cảm thấy căng thẳng hoặc kiệt sức khi tiến tới một cuộc sống khỏe mạnh, và nhanh chóng đầu hàng, nhượng bộ cho những thói quen cũ. Đi kèm với đó là cảm giác nản lòng và thất bại, và chúng ta không thể nào quay trở lại với những mục tiêu đã đặt ra trước đó.</Text>
              <Image
                source={{uri:"https://www.medigoapp.com/uploads/duy_tri_loi_song_lanh_manh_9d4fab5851.jpeg"}}
                style={{width:400,height:300,marginTop:10}}
              />
              <Text style={styles.title1}>Thất bại đã dạy cho chúng ta những gì?</Text>
              <Text style={styles.title3}>Khi chúng ta muốn thay đổi, chúng ta thường nghĩ rằng: “Cứ làm đi, có gì phải lo”. Và nếu thật sự thất bại, vậy thì đã sao? Chỉ cần thử lại là được. Tuy nhiên bộ não thực tế không làm việc như cách chúng ta nghĩ. Và điều này có thể là một mối lo ngại.</Text>
              <Text style={styles.title3}>Bằng cách nào điều này có thể xảy ra? Có một phần nhỏ của bộ não được gọi là habenula. Đây là trung tâm của não lưu trữ những dữ liệu về “phần thưởng tiêu cực” hoặc “sự thất bại”, được biết đến với vai trò trong việc hình thành các hành vi dựa trên những sự thất vọng trong quá khứ.</Text>
              <Text style={styles.title3}>Có một lý do khiến con người tồn tại một trung tâm như vậy ở não. Hãy tưởng tượng một triệu năm trước, con người học cách trèo cây để tìm thức ăn nhưng bị ngã và gãy một chân. Trung tâm này đóng vai trò trong việc lưu trữ về nỗi đau cũng như sự thất bại – như một sự cảnh báo về những vấn đề đã xảy ra để ngăn con người tiếp tục thực hiện những hành động đó và lặp đi lặp lại một nỗi đau. Habenula đang cố bảo vệ chúng ta khỏi những thất bại trong tương lai bằng cách ngăn cản chúng ta, thậm chí ở một vài trường hợp có thể can thiệp bằng những tác động vật lý.</Text>
              <Image
              source={{uri:"https://www.medigoapp.com/uploads/duy_tri_loi_song_lanh_manh_1_64f693a2bf.jpg"}}
              style={{width:400,height:300,marginTop:10}}
              />
              <Text style={styles.title3}>Mặc khác, nếu việc leo trèo đó giúp cho con người tìm thấy những thứ hay ho và vài món ngon để ăn? Thành công này lại ăn sâu vào trí thức ngay sau đó. Những thành công trước đó thúc đẩy chúng ta lặp lại những hành động để đạt được điều đó. Làm thế nào để tính năng này của bộ não tác động đến chúng ta? Nếu chúng ta cứ cố gắng tạo ra một thay đổi và không thành công với nó, habenula sẽ ghi nhận lại thất bại đó. Lần sau, khi chúng ta cố gắng lặp lại hành động đó, habenula sẽ ngăn cản chúng ta bằng những cách vô cùng tinh tế. Ngược lại, khi cố gắng làm những điều mà chúng ta đã thành công trước đó, bộ nhớ lưu lại những thành công đó và nâng cao cơ hội thành công cho những lần tiếp theo.</Text>
              <Text style={styles.title3}>Khi chúng ta cố gắng bắt ép chính mình phải tạo ra những thay đổi lớn và thất bại với nó, những nỗ lực tiếp theo của chúng ta sẽ có ít cơ hội thành công hơn. Nhưng thật không may, rất nhiều người trong số chúng ta đang lặp lại điều đó quá nhiều, và tất cả chỉ củng cố cho sự thất bại trong trí nhớ của habenula. Hãy bắt đầu từ việc ghi lại những thành công nhỏ trên con đường hướng đến sự thay đổi. Khi hiểu được cơ chế làm việc của não, chúng ta có thể đảm bảo habenula làm việc cho mình chứ không phải chống lại mình.</Text>
              <Text styles={styles.title1}>Hiểu được bản thân muốn gì, như thế nào và tại sao?</Text>
              <Text style={styles.title3}>Thay đổi để thành công xuất phát với một động lực mạnh mẽ và sự khác biệt về ý chí. Hãy tự hỏi bản thân rằng: “Tại sao tôi muốn giảm cân?” hoặc “Tại sao tôi nên tập thể dục nhiều hơn?”. Hãy nghĩ về nó một cách nghiêm túc và nhận thức rõ ràng về động lực của mình. Điều này là yếu tố quan trọng nhất bởi vì đây là cách có thể giúp bạn đưa ra hàng trăm những quyết định không quan trọng mỗi ngày.</Text>
              <Text style={styles.title3}>Một khi bạn biết rằng tại sao mình muốn tạo ra một sự thay đổi lành mạnh trong cuộc đời, bước tiếp theo sẽ là bạn cần làm gì để biến điều đó thành sự thật. Hãy tập trung vào thói quen sinh hoạt của bạn. Chúng ta thường xuyên làm những công việc thường ngày mà không nghĩ quá nhiều về nó bởi vì não của chúng ta muốn bảo tồn năng lượng, và tạo ra một thói quen là cách tốt nhất để làm điều này. Vì vậy thay đổi thói quen là cách tốt nhất để thay đổi cách sống của bạn.</Text>
              <Image
              source={{uri:"https://www.medigoapp.com/uploads/thoi_quen_xay_dung_loi_song_lanh_manh_03e3ab2560.jpg"}}
              style={{width:400,height:300,marginTop:10}}
              />
              <Text style={styles.title1}>Làm thế nào để thay đổi thói quen là vấn đề khó khăn nhất chúng ta đang gặp phải</Text>
              <Text style={styles.title3}>Chúng ta thường có xu hướng đặt ra những mục tiêu lớn, ngoạn mục, nghe có vẻ hoa mỹ trên giấy: Chúng tôi sẽ giảm 20kg, sẽ tập luyện và tham gia các cuộc thi chạy bộ hoặc sẽ tập thiền. Vấn đề ở những mục tiêu lớn này là chúng không thực tế một chút nào. Việc này chỉ khiến chúng ta kết thúc với một thất bại, và habenula lại bị ràng buộc bởi những thất bại như vậy. Thay vào đó, điều quan trọng là phải phá vỡ cách thức chúng ta đang làm thành từng bước nhỏ để dễ dàng quản lý.</Text>
              <Text style={styles.title3}>Thiết lập từ những mục tiêu nhỏ - Không có mục tiêu nào là quá nhỏ. Tôi đã cố gắng làm cho một trong những bệnh nhân của mình bắt đầu việc tập thể dục trên máy chạy bộ trong nhiều năm, nhưng anh ấy không thể biến nó trở thành một thói quen của mình. Cuối cùng, tôi đề nghị với anh ấy bắt đầu với một mục tiêu nhỏ hơn: Anh ấy chỉ cần đứng trên máy chạy bộ trong năm phút mỗi ngày – anh ấy đồng ý với điều đó. Sáu tuần sau, tôi ngạc nhiên khi anh ấy nói rằng đã bắt đầu đi bộ bằng máy chạy bộ 30 phút mỗi ngày. Bây giờ anh ấy có vẻ ổn với điều đó khi đã tiếp xúc với nó mỗi ngày. Một “trận thắng nhỏ” đánh dấu cho một thói quen lành mạnh sau nhiều năm “kháng chiến”.</Text>
              <Text style={styles.title3}>Cụ thể hóa những mục tiêu – Một mục tiêu tốt không chỉ cần thực tế mà cũng cần được cụ thể hóa. Các mục tiêu nhỏ và chi tiết sẽ dễ thực hiện hơn những mục tiêu quá mơ hồ. Nếu bạn muốn cải thiện những bữa ăn của mình, bạn có thể bắt đầu bằng cách thêm một lát táo vào mỗi bữa sáng. Hãy cố gắng liên kết những sự thay đổi nhỏ như vậy vào các công việc hằng ngày của bạn. Tạo ra những niềm vui – Càng nhiều càng tốt, cố gắng chọn một thói quen mới mà bạn muốn và thích nó, thay vì nghĩ đó là việc nên và cần làm. Bắt đầu với những việc mà bạn nghĩ rằng nó đem lại niềm vui cho mình, ngay cả khi cảm giác tốt đẹp chủ yếu chỉ đến khi bạn hoàn thành nó. Điều này giúp kích thích giải phóng ra dopamine giúp hình thành các thói quen trong bộ nhớ. Bạn càng tận hưởng những gì mình làm, càng nhiều khả năng bạn sẽ gắn bó với nó.</Text>
              <Image
              source={{uri:"https://www.medigoapp.com/uploads/duy_tri_loi_song_lanh_manh_1e41dc486a.jpg"}}
              style={{width: 400, height: 300}}
              />
              <Text style={styles.title3}>Có thể bạn sẽ tìm thấy ý nghĩa trong việc giúp đỡ một người hàng xóm lớn tuổi, trông nhà hộ cô ấy hoặc trông con hộ cô ấy. Bạn cũng có thể hướng dẫn lũ trẻ - hoặc làm tình nguyện cho bất kỳ tổ chức nào đó bạn cảm thấy thích. Bất kỳ sự lựa chọn nào bạn đưa ra, hãy tìm ra mục đích của nó trong cuộc sống của bạn. Hãy tìm ra lý do của bạn – tại sao bạn muốn thức dậy vào ngày mai, và bạn muốn làm gì khi mỗi ngày trôi qua? Nhưng, điều quan trọng nhất, đó là lý do sẽ cho bạn năng lượng để thay đổi những thói quen từ nhỏ nhất, và sẽ dìu dắt bạn đến với một cuộc sống khỏe mạnh hơn.</Text>
              <Text style={styles.title3}>Đây là lúc bạn cần chú ý tới những gì thật sự quan trọng với mình – và làm cách nào bạn có thể thực hiện được những điều đó trong chương mới của cuộc đời. Sau khi tôi phát hiện mình mắc phải ung thư lần thứ 2 trong cuộc đời, tôi thấy một sự thoải mái vô tận khi tập trung vào mỗi một ngày trôi qua như thể đó là ngày cuối cùng của cuộc đời mình. Đôi lúc tôi sẽ nghĩ, “Điều gì sẽ xảy ra nếu tôi ở trên một chiếc máy bay sắp gặp nạn – làm thế nào để tôi có thể tập trung vào những phút cuối cùng của cuộc đời mình?” Và tôi chỉ cần làm theo như vậy. Bạn cần biết rằng bạn có thể thay đổi của cuộc sống của chính mình – từ cách bạn ăn, hoạt động và ngủ đến cách bạn đối mặt với căng thẳng và tạo ra các mối liên kết với mọi người. Không ai trong chúng ta sẽ sống sót khi ra khỏi thế giới này – nhưng nếu bạn sống một cuộc sống ý nghĩa với mục tiêu, lòng biết ơn, sự lạc quan và hạnh phúc, bạn sẽ sống một cuộc sống trọn vẹn nhất.</Text>
              <Text style={styles.title1}>Thay đổi lối sống để cải thiện bộ não</Text>
              <Text style={styles.title3}>Các nhà nghiên cứu muốn xác định xem liệu việc tập thể dục và chế độ ăn uống có thể giúp con người cải thiện khả năng lập kế hoạch, sự tập trung, học tập những kiến thức mới và sắp xếp nhiều nhiệm vụ, ngay cả khi những kỹ năng này đã bắt đầu suy giảm. Những người tham gia vào nghiên cứu bao gồm một nhóm người lớn trên 55 tuổi, có một số dấu hiệu của suy giảm nhưng không sa sút trí tuệ, những người có nguy cơ mắc các bệnh mạch vành và những người ít vận động. Nghiên cứu được thực hiện trong sáu tháng. Những người tham gia được chia thành bốn nhóm điều trị:</Text>
              <Text style={styles.title3}>Nhóm được giáo dục về sức khỏe (HE) nhận được các cuộc điện thoại thường xuyên từ những chuyên gia sức khỏe về những chủ đề liên quan đến bệnh tim. Những người tham gia duy trì thói quen ăn uống và chế độ luyện tập thông thường của họ.</Text>
              <Text style={styles.title3}>Nhóm phương pháp ăn kiêng để ngăn chặn tăng huyết áp (DASH) đã được thay đổi về chế độ ăn uống để tuân theo những hướng dẫn của chế độ ăn DASH, tương tự với chế độ ăn Địa Trung Hải nhưng được bổ sung thêm vào việc tập trung cắt giảm lượng muối nạp vào. Những người tham gia gặp gỡ thường xuyên với các chuyên gia dinh dưỡng và được thông báo rằng không cần tập thể dục.</Text>
              <Image
              source={{uri:"https://www.medigoapp.com/uploads/song_lanh_manh_moi_ngay_914cfa8f2d.jpg"}}
              style={{width: 300, height: 400}}
              />
              <Text style={styles.title3}>Nhóm tập luyện thể thao (AE) tham gia vào các bài tập ba lần một tuần. Bài tập bao gồm 10 phút khởi động, sau đó là 35 phút đi bộ liên tục hoặc đạp xe tại chỗ. Người tham gia được khuyến khích tuân theo chế độ ăn uống bình thường của họ.</Text>
              <Text style={styles.title3}>Nhóm tập luyện thể thao kết hợp với DASH (AE + DASH) tham gia vào kế hoạch tập thể dục và tuân theo chế độ ăn DASH đã được nêu ở trên.</Text>
              <Text style={styles.title3}>Các nhà nghiên cứu đánh giá các chức năng của những người tham gia trước và sau khi thử nghiệm. Và nhận thấy rằng việc tăng cường tập thể dục và chuyển sang chế độ ăn DASH đã thực sự cải thiện các chức năng trong cơ thể sau sáu tháng. Kết quả thể hiện trong hình dưới đây cho thấy hầu hết lợi ích đến từ việc kết hợp tập thể dục và thay đổi chế độ ăn uống. Khi so sánh với nhóm những người đã thay đổi chế độ ăn và thói quen tập luyện với những người duy trì thói quen hàng ngày của họ, bạn có thể thấy sự khác biệt được tạo ra lớn như thế này.</Text>
              <Text style={{marginTop:20,fontSize:17,color:colors.black}}>Nguồn tài liệu: Mayo Clinic</Text>
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
    },
    title4:{
        marginTop:10,
        fontSize:18,
        color:colors.black,
        fontWeight:"bold"
    }
  })