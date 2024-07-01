module ApplicationHelper
  def full_title(page_title = '')
    init_title = 'LOKAS'
    page_title.empty? ? init_title : "#{page_title} | #{init_title}"
  end
end
