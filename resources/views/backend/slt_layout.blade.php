<div class="slt_layout">
    <form action="{{asset('create/menu')}}" method="post">
        <div class="layout_head">
            <h2>Mẫu layout</h2>
            <div class="flex-grow"></div>
            <button type="submit" name="create_menu_layout" class="create_menu_layout">Tạo trang mới</button>
        </div>
        <div class="insider">
            <div class="item active" data-id="1">
                <div class="img"><img src="images/layout1.png" alt="layout" /></div>
            </div>
            <div class="item" data-id="2">
                <div class="img"><img src="images/layout2.png" alt="layout" /></div>
            </div>
            <div class="item" data-id="3">
                <div class="img"><img src="images/layout3.png" alt="layout" /></div>
            </div>
            <div class="item" data-id="4">
                <div class="img"><img src="images/layout4.png" alt="layout" /></div>
            </div>
            <div class="item" data-id="5">
                <div class="img"><img src="images/layout5.png" alt="layout" /></div>
            </div>
            <div class="item" data-id="6">
                <div class="img"><img src="images/layout6.png" alt="layout" /></div>
            </div>
            <div class="item" data-id="7">
                <div class="img"><img src="images/layout7.png" alt="layout" /></div>
            </div>
            <div class="item" data-id="8">
                <div class="img"><img src="images/layout8.png" alt="layout" /></div>
            </div>
        </div>

        <input type="hidden" class="get_menu_name" name="get_menu_name" value="" />
        <input type="hidden" class="get_menu_parent" name="get_menu_parent" value="" />
        <input type="hidden" class="get_layout" name="get_layout" value="1" />
        <input type="hidden" class="get_id" name="get_id" value="{{$id}}" />

        {{csrf_field()}}
    </form>
</div>
